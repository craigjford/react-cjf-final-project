Phase 2 Project - Golf Courses

React Elements Used
    •   Use the <BrowserRouter> component to enabled
    •   Use the <Route> component to display different components based on the URL
    •   Use the <NavBar> component to allow client-side navigation
    •   Use the { useState } to enable keeping state for actions created bye CRUD activities
    •   Use the { useEffect } to enable application to get all course upon loading the application
    •   Use fetch with the methods GET, POST, DELETE and PATCH to keep the db.json in sync with state
    •   Handcrafted a db.json file from scratch.
    •   Utilized prop components and well as callbacks to enable Reverse Information Flow

Introduction

This project builds out a Golf Course application that has routes for a Home Page, CourseForm Page and CourseList Page. Our goal is to provide routes and links for these 3 pages.  Additionally, the project will contain the following Pages to enable CRUD activity to keep JSON file and State in sync.
    •   App Page
    •   NavBar Page
    •   Home Page
    •   CourseForm Page
    •   CourseList Page
    •   CourseItem Page

*** Please refer to course.drawio file to get a wireframe of project

Setup

Our src folder contains the following:
src/
├── index.js
└── components/
    ├── App.js
    ├── NavBar.js
    ├── Home.js
    ├── CourseForm.js
    ├── CourseList.js
    └── NavBar.js


index.js
Our index.js file is completed for us. It loads the BrowserRouter component from React Router, as well as App as the top level component.

Components

App

Inside this component, we will render our NavBar and three React Router Route components with the following paths:
    •   /courseform: should render the CourseForm component
    •   /courselist: should render the CourseList component
    •   /: should render the Home component

This component will keep state for our golf course list using the useState hook
This component will do an initial fetch to get all of golf courses using the useEffect hook. It will only run once upon loading.
The component will contain final functions from callbacks for Submit, Delete and Update which will update state to keep in sync with JSON file.  In the JSX in the Routes, CourseForm will pass a prop that will be a callback to handle Submit, CourseList will pass props that contains the list of courses and a Delete callback prop and a Update callback prop


NavBar

This component will render three NavLink components. They will be for /,  /courseform,  /courselist /

Home

This component will render the text Home Page in an <h1>.

CourseForm

This component will have input fields for course name, address, city, state, phone number and an image from the course.  The will be controlled input fields kept in state using useState hook.  The form will make the fetch POST and the use passed callback to finish Submit process.
CourseList
This component will take in props for list of golf courses and delete and update callbacks.  This component will render a list of golf courses.  It will do this by creating an CourseItem for each course.  It will pass props with courses destructured as well as the delete and update callbacks passed in as props. 

CourseItem

This component will render course name, an image of the course, address, city, state and phone number of which all were passed in as props.  Each course will have a Delete and Likes button.  The component will handle fetch DELETE and fetch PATCH in event listeners.  Each will uses appropriate delete and update callback passed in as props and will make its way to the App component.

Commits -34
************************************************
Commits on Jul 10, 2022
Finished css for buttons in CourseForm

@craigjford
craigjford committed 4 minutes ago
 
Attempting to fix buttond CSS in CourseList

@craigjford
craigjford committed 33 minutes ago
 
Commits on Jul 9, 2022
Still working on DeElete button and Likes button CSS in CourseForm

@craigjford
craigjford committed 17 hours ago
 
Finished testing CSS in Home Page and CourseForm - found some bugs in… 

@craigjford
craigjford committed 18 hours ago
 
Finished CSS for Home Page

@craigjford
craigjford committed 18 hours ago
 
Courseform CSS - got all input fileds to line-up

@craigjford
craigjford committed 19 hours ago
 
Made progress on input fields in CSS

@craigjford
craigjford committed 19 hours ago
 
Adding CSS to CourseForm

@craigjford
craigjford committed 19 hours ago
 
Updated Home Page CSS

@craigjford
craigjford committed 22 hours ago
 
Added description to the Hom Page as well as CSS

@craigjford
craigjford committed 22 hours ago
 
Created CSS for NavBar

@craigjford
craigjford committed 23 hours ago
 
Added CSS for course name and course data

@craigjford
craigjford committed 23 hours ago
 
Added CSS for each course in CourseItem - updated delete and likes bu… 

@craigjford
craigjford committed yesterday
 
add CSS for Delete and Likes Button

@craigjford
craigjford committed yesterday
 
Commits on Jul 8, 2022
completed README.md file

@craigjford
craigjford committed 2 days ago
 
finished component coding - now to testing and CSS

@craigjford
craigjford committed 2 days ago
 
finished update like in CourseItem, passed down prop onhandleCourseUp… 

@craigjford
craigjford committed 2 days ago
 
Added fetch/patch to handle updating likes

@craigjford
craigjford committed 2 days ago
 
Added Event Listener to CourseItem to handle like cout which is in th… 

@craigjford
craigjford committed 2 days ago
 
Commits on Jul 7, 2022
Put Delete Logic in Course Item

@craigjford
craigjford committed 3 days ago
 
Correctedd bug in CourseList. It was not listing the Course Name

@craigjford
craigjford committed 3 days ago
 
Added CourseForm Submit and update state in App

@craigjford
craigjford committed 3 days ago
 
created layout for CourseForm

@craigjford
craigjford committed 3 days ago
 
finished CourseItem display fully

@craigjford
craigjford committed 3 days ago
 
added code to add buttons to CourseItem anded added count state

@craigjford
craigjford committed 3 days ago
 
added code for Course Item, not completely finished

@craigjford
craigjford committed 3 days ago
 
passed courses prop to CourseList and wrote map function to CourseItem

@craigjford
craigjford committed 3 days ago
 
Added State and useffect in App - able to fetch data and set State

@craigjford
craigjford committed 3 days ago
 
added NavLink to NavBar'

@craigjford
craigjford committed 3 days ago
 
Added Switch and Route to App component

@craigjford
craigjford committed 3 days ago
 
Added a Home Component to wireframe and created a Home Component

@craigjford
craigjford committed 3 days ago
 
completed profect wireframe. Create all components and connected them… 

@craigjford
craigjford committed 3 days ago
 
Commits on Jul 6, 2022
Inital npx build and created db.json file

@craigjford
craigjford committed 4 days ago
 
Initialize project using Create React App

@craigjford
craigjford committed 4 days ago
 
