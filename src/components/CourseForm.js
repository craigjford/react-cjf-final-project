import React, { useState } from 'react';

function CourseForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    courseName: "",
    address: "",
    city: "",
    state: "",
    phoneNumber: "",
    course_url: "",
    likes: 0
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    fetch("http://localhost:3001/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })    
    onFormSubmit(formData);


  }  


  return (
    <div className="course-form">
      <h1>Please Enter Your Favorite Golf Course</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="courseName">Course Name </label>
          <input
            type="text"
            name="courseName"
            required
            onChange={handleChange}
            value={formData.courseName}
          />
        <label htmlFor="address">Address </label>
          <input
            type="text"
            name="address"
            required
            onChange={handleChange}
            value={formData.address}
          />
        <label htmlFor="city">City </label>
          <input
            type="text"
            name="city"
            required
            onChange={handleChange}
            value={formData.city}
          />
        <label htmlFor="state">State </label>
          <input
            type="text"
            name="state"
            required
            onChange={handleChange}
            value={formData.state}
          />
        <label htmlFor="phoneNumber">Phone Number </label>
          <input
            type="text"
            name="phoneNumber"
            required
            onChange={handleChange}
            value={formData.phoneNumber}
          />
        <label htmlFor="course_url">Avatar Image</label>
          <input
            type="text"
            name="course_url"
            required
            value={formData.course_url}
            onChange={handleChange}
          />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CourseForm;







