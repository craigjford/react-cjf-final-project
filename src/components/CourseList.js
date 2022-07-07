import React from 'react'
import CourseItem from './CourseItem'

function CourseList({ courses }) {
  
  const displayCourses = courses.map((course) => {
    console.log('course url = ', course.url)
    return (<CourseItem key={course.id} name={course.name} address={course.address} city={course.city} 
                    state={course.state} phoneNumber={course.phoneNumber} courseUrl={course.url} likes={course.likes} />)
  })

  return (
    <div>
        {displayCourses}
    </div>
  )
}

export default CourseList

