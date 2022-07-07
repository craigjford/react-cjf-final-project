import React, {useState} from 'react'

function CourseItem({ name, address, city, state, phoneNumber, courseUrl, likes }) {
    const [count, setCount] = useState(likes)

    return (
        <div className="course-item">
            <h1>{name}</h1> 
            <img src={courseUrl} alt={name} height="400px" width="400px"></img>
            <br></br>
            <h3>{address}</h3>
            <h3>{city}</h3>
            <h3>{state}</h3>
            <h3>{phoneNumber}</h3>
            <br></br>
            <button className="deletebtn" type="button">Delete</button>
            <button className="likesbtn" type="button">Links: {count}</button>
            <hr></hr>
        </div>

    )
}

export default CourseItem