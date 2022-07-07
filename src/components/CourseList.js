import React from 'react'
import CourseItem from './CourseItem'

function CourseList({ courses }) {

  const displayCourses = courses.map((course) => {
    return (<CourseItem key={course.id} name={course.name} address={course.address} city={course.city} 
                    state={course.state} phoneNumber={course.phoneNumber} url={course.url} />)
  })

  return (
    <div>
        {displayCourses}
    </div>
  )
}

export default CourseList

