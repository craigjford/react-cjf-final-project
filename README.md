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
