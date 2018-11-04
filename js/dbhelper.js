/**
 * Common database helper functions.
 */
class DBHelper {
  /**
   * Database URL.
   * Change this to restaurants.json file location on your server.
   * Based on global env variable, sets so will work locally in our dev
   * environment or in github.io page environment
   */
  static get DATABASE_URL() {
    if (Window.RR$.Enums.IS_PRODUCTION_INDICATOR) {
      return 'https://rudimusmaximus.github.io/FENDp5/data/restaurants.json';
    } else {
      const port = 3000; // Change this to your server port
      return `http://localhost:${port}/data/restaurants.json`;
    }
  }

  /**
   * @description Fetch all restaurants.
   * @param {function} callback - success callback
   */
  static fetchRestaurants(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', DBHelper.DATABASE_URL);
    xhr.onload = () => {
      if (xhr.status === 200) { // Got a success response from server!
        const json = JSON.parse(xhr.responseText);
        const restaurants = json.restaurants;
        callback(null, restaurants);
      } else { // Oops!. Got an error from server.
        const error = (`Request failed. Returned status of ${xhr.status}`);
        callback(error, null);
      }
    };
    xhr.send();
  }

  /**
   * @description Fetch a restaurant by its ID.
   * @param {string} id - restaurant id
   * @param {function} callback - success callback
   */
  static fetchRestaurantById(id, callback) {
    // fetch all restaurants with proper error handling.
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        const restaurant = restaurants.find((r) => r.id == id);
        if (restaurant) { // Got the restaurant
          callback(null, restaurant);
        } else { // Restaurant does not exist in the database
          callback('Restaurant does not exist', null);
        }
      }
    });
  }

  /**
   * @description Fetch restaurants by a cuisine type with proper error
   * handling.
   * @param {string} cuisine - type of restaurant //TODO: confirm string
   * @param {function} callback - success callback
   */
  static fetchRestaurantByCuisine(cuisine, callback) {
    console.log(cuisine);
    // Fetch all restaurants  with proper error handling
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Filter restaurants to have only given cuisine type
        const results = restaurants.filter((r) => r.cuisine_type == cuisine);
        callback(null, results);
      }
    });
  }

  /**
   * @description Fetch restaurants by a neighborhood with proper error
   * handling.
   * @param {object} neighborhood - burrows area name
   * @param {function} callback - success callback
   */
  static fetchRestaurantByNeighborhood(neighborhood, callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Filter restaurants to have only given neighborhood
        const results = restaurants.filter((r) => r
            .neighborhood == neighborhood);
        callback(null, results);
      }
    });
  }

  /**
   * @description Fetch restaurants by a cuisine and a neighborhood with
   * proper error handling.
   * @param {string} cuisine - type of restaurant //TODO: confirm string
   * @param {object} neighborhood - burrows area name
   * @param {function} callback - success callback
   */
  static fetchRestaurantByCuisineAndNeighborhood(cuisine,
      neighborhood, callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        let results = restaurants;
        if (cuisine != 'all') { // filter by cuisine
          results = results.filter((r) => r.cuisine_type == cuisine);
        }
        if (neighborhood != 'all') { // filter by neighborhood
          results = results.filter((r) => r.neighborhood == neighborhood);
        }
        callback(null, results);
      }
    });
  }

  /**
   * @description Fetch all neighborhoods with proper error handling.
   * @param {function} callback - answer callback
   */
  static fetchNeighborhoods(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all neighborhoods from all restaurants
        const neighborhoods = restaurants.map((v, i) => restaurants[i]
            .neighborhood);
        // Remove duplicates from neighborhoods
        const uniqueNeighborhoods = neighborhoods.filter((v, i) => neighborhoods
            .indexOf(v) == i);
        callback(null, uniqueNeighborhoods);
      }
    });
  }

  /**
   * @description Fetch all cuisines with proper error handling.
   * @param {function} callback - answer callback
   */
  static fetchCuisines(callback) {
    // Fetch all restaurants
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all cuisines from all restaurants
        const cuisines = restaurants.map((v, i) => restaurants[i].cuisine_type);
        // Remove duplicates from cuisines
        const uniqueCuisines = cuisines.filter((v, i) => cuisines
            .indexOf(v) == i);
        callback(null, uniqueCuisines);
      }
    });
  }

  /**
   * @description Restaurant page URL.
   * @param {object} restaurant - custom restaurant object //TODO: confirm type
   * @return {string} url
   */
  static urlForRestaurant(restaurant) {
    return (Window.RR$.Enums.DEV_PROD_PREFIX+
      `restaurant.html?id=${restaurant.id}`);
  }

  /**
   * @description Restaurant image URL.
   * @param {object} restaurant - custom restaurant object //TODO: confirm type
   * @return {string} string for location of image
   */
  static imageUrlForRestaurant(restaurant) {
    return (Window.RR$.Enums.DEV_PROD_PREFIX+`img/${restaurant.photograph}`);
  }

  /**
   * @description Map marker for a restaurant.
   * @param {object} restaurant - custom restaurant object //TODO: confirm type
   * @param {object} map - google map object //TODO: confirm type
   * @return {object} marker - custom map marker object
   */
  static mapMarkerForRestaurant(restaurant, map) {
    const marker = new google.maps.Marker({
      position: restaurant.latlng,
      title: restaurant.name,
      url: DBHelper.urlForRestaurant(restaurant),
      map: map,
      animation: google.maps.Animation.DROP,
    });
    return marker;
  }
}
