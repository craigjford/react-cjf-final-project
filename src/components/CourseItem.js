import React from 'react'

function CourseItem({ id, name, address, city, state, phoneNumber, courseUrl, likes, onDeleteCourse, onhandleCourseUpdate }) {
 
    const handleCourseDelete = (id) => {
        fetch(`http://localhost:3001/courses/${id}`, {
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then(onDeleteCourse(id))
    }

    const handleCourseLike = (id) => {
        console.log('likes = ', likes)
        let newLikes = likes + 1;
        console.log('newLikes = ', newLikes)


        fetch(`http://localhost:3001/courses/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                likes: newLikes
            }),
        })
            .then((res) => res.json())
            .then((updatedCourse) => onhandleCourseUpdate(updatedCourse));

    }

    return (
        <div className="course-item">
            <h1>{name}</h1> 
            <img src={courseUrl} alt="Premium golf course" height="400px" width="400px"></img>
            <br></br>
            <h3>{address}</h3>
            <h3>{city}</h3>
            <h3>{state}</h3>
            <h3>{phoneNumber}</h3>
            <br></br>
            <button className="deletebtn" type="button" onClick={() => handleCourseDelete(id)}>Delete</button>
            <button className="likesbtn" type="button" onClick={() => handleCourseLike(id)}>Likes: {likes}</button>
            <hr></hr>
        </div>

    )
}

export default CourseItem