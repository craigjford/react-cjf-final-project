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

        let newLikes = likes + 1;

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
            <h1 className="coursename">{name}</h1> 
            <img className="courseimg" src={courseUrl} alt="Premium golf course" height="500px" width="500px"></img>
            <br></br>
            <div className="center-ul">
                <ul>
                    <li>Address: {address}</li>
                    <li>City: {city}</li>
                    <li>State: {state}</li>
                    <li>Phone Number: {phoneNumber}</li>
                </ul>
            </div>
            <button className="item-btn" type="button" onClick={() => handleCourseDelete(id)}>Delete</button>
            <button className="item-btn" type="button" onClick={() => handleCourseLike(id)}>Likes: {likes}</button>
        </div>

    )
}

export default CourseItem