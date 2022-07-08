import React, {useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from './NavBar';
import CourseList from './CourseList';
import CourseForm from "./CourseForm";


function App() {
  //const history = useHistory();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3001/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, [])

  const handleSubmit = (formData) => {
     const newCourse = [...courses, formData] 
     setCourses(newCourse)
  }

  console.log('courses = ', courses)

  return (
    <div>
        <NavBar /> 
        <Switch>
           <Route exact path="/courseform">
              <CourseForm onFormSubmit={handleSubmit} />
           </Route>
           <Route exact path="/courselist">
              <CourseList courses={courses} />
           </Route>
           <Route exact path="/">
              <Home />
           </Route>
        </Switch>
    </div>
  )
}

export default App;

