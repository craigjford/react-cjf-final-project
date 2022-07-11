import React, {useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from './NavBar';
import CourseList from './CourseList';
import CourseForm from "./CourseForm";


function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
  }, [])

  const handleSubmit = (formData) => {
     const newCourse = [...courses, formData] 
     setCourses(newCourse);
  }

  const handleDelete = (id) => {
      const filteredCourse = courses.filter((course) => course.id !== id)
      setCourses(filteredCourse)
  }

  const handleUpdate = (updatedCourse) => {
      const courseUpdatedLikeList = courses.map((course) => {
         if (course.id === updatedCourse.id) {
            return updatedCourse;
         } else {
            return course;
         }
      })

      setCourses(courseUpdatedLikeList)
  }

  console.log('courses = ', courses)
  console.log('in app - checking Github')

  return (
    <div>
        <NavBar /> 
        <Switch>
           <Route exact path="/courseform">
              <CourseForm onFormSubmit={handleSubmit} />
           </Route>
           <Route exact path="/courselist">
              <CourseList courses={courses} onDeleteCourse={handleDelete} 
                           onhandleCourseUpdate={handleUpdate} />
           </Route>
           <Route exact path="/">
              <Home />
           </Route>
        </Switch>
    </div>
  )
}

export default App;

