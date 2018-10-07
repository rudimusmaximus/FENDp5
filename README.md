# Fendp5 - Restaurant Reviews App-Stage 1
**Static to responsive & accessible**  
An Udacity FEND Nanodegree repository. Restaurant Reviews App-Stage 1. In this real world case study, given the front end code for a static Restaurant Reviews App, revise the site to be responsive and achieve accessibility standards.

# My Notes Completing This

## Lessons learned:  

| Area | Comments |
| :--- | :--- |
| 1. @ CODEOWNERS files | a. Is this a best practice or standard. Review when time allows. See assumptions. |
| 2. TODO | a. TODO b. TODO |
| 3. TODO | a. TODO b. TODO |

## Important Starting Code Note
 - Merged readme and starter code from https://github.com/udacity/mws-restaurant-stage-1/commit/bac05e5709556f29ecad764742fe377b32ba71e7 after seting up my DevFlow.

## Assumptions required to solve the problem
The following assumptions were made by evaluating the code and all given instructions:
 - most of our solution can be done in TODO

 - ES6 is OK to use without transpiling with Babel

 - There was an "@ CODEOWNERS" file that contained the following in the starter code "* @forbiddenvoid @richardkalehoff @asparr". The file was not included in thist repo but credit listed here. Assumption is that it is Udacity team for repo as part of FEND Program.

## Work Flow
I followed git commit guidelines, a 'Git Flow' branching model committing into feature branches that are merged into develop until ready to test with GitHub the repository of truth. The repo was built from scratch with a copy of the baseline code added to my standalone repo - this allows for demonstration of issue template and for later experiments after the course. 

At key steps in the work completion, I create a release branch that is merged into develop and master with a semantic version tag on the master branch following 

I used Atom and GitKraken with a Chrome browser for testing. I copied my preferred label scheme into my repository from my other repositories using [Github Label Manager](https://www.dorukdestan.com/github-label-manager/).

TODO: gulp was used  as follows: //TODO: get the linting and live serving working and review/consider sass and jasmine based on provided code and/or project rubric.

See develop branch for commit history with git commit style followed. Releases made to master and develop with tags on master following [Semantic Versioning 2.0.0](https://semver.org/).

## Resources used to complete this work
I read [TODO]().
I watched [TODO]().

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
