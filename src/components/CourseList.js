import React from 'react'
import CourseItem from './CourseItem'

function CourseList({ courses, onDeleteCourse, onhandleCourseUpdate }) {

  const displayCourses = courses.map((course) => {
    return (<CourseItem key={course.id} id={course.id} name={course.courseName} address={course.address} city={course.city} 
                    state={course.state} phoneNumber={course.phoneNumber} courseUrl={course.course_url} likes={course.likes} 
                    onDeleteCourse={onDeleteCourse} onhandleCourseUpdate={onhandleCourseUpdate} />)
  })

  return (
    <div>
        {displayCourses}
    </div>
  )
}

export default CourseList

