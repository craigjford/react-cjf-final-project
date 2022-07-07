import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from './NavBar';
import CourseList from './CourseList';
import CourseForm from "./CourseForm";


function App() {
  return (
    <div>
        <NavBar /> 
        <Switch>
           <Route exact path="/courseform">
              <CourseForm />
           </Route>
           <Route exact path="/courselist">
              <CourseList />
           </Route>
           <Route exact path="/">
              <Home />
           </Route>
        </Switch>
    </div>
  )
}

export default App;

