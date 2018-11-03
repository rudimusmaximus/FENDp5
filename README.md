# Fendp5 - Restaurant Reviews App-Stage 1
**Static to responsive & accessible**  
An Udacity FEND Nanodegree repository. Restaurant Reviews App-Stage 1. In this real world case study, given the front end code for a static Restaurant Reviews App, revise the site to be responsive and achieve accessibility standards.

# My Notes Completing This

## Important Starting Code Note
 - Merged readme and starter code from https://github.com/udacity/mws-restaurant-stage-1/commit/bac05e5709556f29ecad764742fe377b32ba71e7 after seting up my DevFlow.

## Lessons learned:  

| Area | Comments |
| :--- | :--- |
| 1. @ CODEOWNERS files | a. Is this a best practice or standard. Review when time allows. See assumptions. |
| 2. CSS to SCSS | a. followed course example to create scss from css b. Read [this article](https://www.hongkiat.com/blog/convert-css-to-sass/) about converting old css to learn scss. Used [this tool](http://css2sass.herokuapp.com/) to do so with our given css. I was able to learn the better layout of sass in a scss file. Replaced my scss with this file and tested to make sure worked as before. Continuing from this point with edits to the sass first. Nothing fancy, just getting used to it and keeping the css generation via gulp.  |
| 3. .eslintrc | a. Research deprecation of this file and which of the several that can be used in it's stead. b. See https://eslint.org/docs/user-guide/configuring#using-configuration-files-1 |
| 4. cross platform dev | a. in order to develop on Ubuntu 16.04LTS and MacOS, i replicated our .bashrc terminal setup for bash shell; also, learned mvn to manage node and npm; successfully made changes between the two including command line linting to google standards, sass generation of css, and browser sync for live editing and testing especially of service worker; for NVM see [how to manage node js sudo free](https://www.nearform.com/blog/how-to-manage-node-js-sudo-free-with-nvm/) found after MUCH research and trial and error.<br>b. One's dev environment should be as similar to production as possible; locally, I work in http and in production, work is hosted on github pages using https. TODO: in the future setup local to have https as well.<br>C. GitHub pages root directory is NOT the repo name, so we needed to create a solution to manage the links with a 'RR$.Enums.DEV_PROD_PREFIX' based on true false for in production status variable. This is working locallay in both Mac and Linux. Will test on ghPages.<br>D. Chromebooks: used [crouton](https://github.com/dnschneid/crouton) to create 'chroot' (**Chromium OS Universal Chroot Environment**) with xenial Ubuntu for our linux dev stack same as our macOS stack. :) This works smashingly well! The chromebook remains fully functional and gets updates without the need for a dual boot solution. In future, a chromebook that supports linux apps should make this unnecessary as it is less secure without OS verification. However, low cost and stable. |
| 5. TODO | a. TODO b. TODO |
| 6. TODO | a. TODO b. TODO |
| . TODO | a. TODO b. TODO |

## Assumptions required to solve the problem
The following assumptions were made by evaluating the code and all given instructions:
 - ES6 is OK to use without transpiling with Babel
 
 - Not required to build minified/compressed production files

 - There was an "@ CODEOWNERS" file that contained the following in the starter code "* @forbiddenvoid @richardkalehoff @asparr". The file was not included in thist repo but credit listed here. Assumption is that it is Udacity team for repo as part of FEND Program.

## Work Flow
I followed git commit guidelines, a 'Git Flow' branching model committing into feature branches that are merged into develop until ready to test with GitHub the repository of truth. The repo was built from scratch with a copy of the baseline code added to my standalone repo - this allows for demonstration of issue template and for later experiments after the course. 

At key steps in the work completion, I create a release branch that is merged into both develop and master with a semantic version tag on the master branch following the example in my [DevFlow Repo](https://github.com/rudimusmaximus/DevFlow)

I used Atom and GitKraken with a Chrome browser for testing. I copied my preferred label scheme into my repository from my other repositories using [Github Label Manager](https://www.dorukdestan.com/github-label-manager/).

Gulp was used to get the linting and live serving working and start learning sass via scss file. Jasmine was not used for this project.

See develop branch for commit history with git commit style followed. Releases made to master and develop with tags on master following [Semantic Versioning 2.0.0](https://semver.org/). Additionally, I'm updating my package.json with my semantic version used in my master branch release tagging scheme as well.

## Resources used to complete this work
See lessons learned nuber two above for scss tool for converting given css to scss.

I read [This to learn configuration of eslint](https://eslint.org/docs/user-guide/configuring) and used rules to get my code working and then to complete linting in rounds.
I watched [Project 1 MWS Webinar with Doug Brown](https://www.youtube.com/watch?v=92dtrNU1GQc).
I watched the following video and reviewed the following site and article for the page caching approach as follows:  
[Service worker component fundamentals by Google](https://developers.google.com/web/fundamentals/primers/service-workers/), [TraversyMedia's approach](https://www.youtube.com/watch?v=ksXwaWHCW6k), and [Matthew Cranford's restaurant reviews app](https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-4-service-workers/).  
Also, [M.C.'s review on accessiblity for this project]().  


# Udacity README.md from starter code (google maps branch)  

# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality. 

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and make start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write. 
