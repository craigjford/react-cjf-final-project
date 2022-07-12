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
    
    fetch("http://localhost:3001/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })    
    onFormSubmit(formData);

    const clearInput = {
      courseName: "",
      address: "",
      city: "",
      state: "",
      phoneNumber: "",
      course_url: "",
      likes: 0
    }

    setFormData(clearInput);
  }  


  return (
    <div>
      <h1 className="formheader">Please Enter Your Favorite Golf Course</h1>
      <form className="course-form" onSubmit={handleSubmit}>
        <label id="formlabel" htmlFor="courseName">Course Name  </label>
          <input
            type="text"
            id="input-field"
            name="courseName"
            required
            onChange={handleChange}
            value={formData.courseName}
          />
        <label id="formlabel" htmlFor="address">Address </label>
          <input
            type="text"
            id="input-field"
            name="address"
            required
            onChange={handleChange}
            value={formData.address}
          />
        <label id="formlabel" htmlFor="city">City </label>
          <input
            type="text"
            id="input-field"
            name="city"
            required
            onChange={handleChange}
            value={formData.city}
          />
        <label id="formlabel" htmlFor="state">State </label>
          <input
            type="text"
            id="input-field"
            name="state"
            required
            onChange={handleChange}
            value={formData.state}
          />
        <label id="formlabel" htmlFor="phoneNumber">Phone Number </label>
          <input
            type="text"
            id="input-field"
            name="phoneNumber"
            required
            onChange={handleChange}
            value={formData.phoneNumber}
          />
        <label id="formlabel" htmlFor="course_url">Course Image </label>
          <input
            type="text"
            id="input-field"
            name="course_url"
            required
            value={formData.course_url}
            onChange={handleChange}
          />
        <button type="submit" className="submitbtn">Submit</button>
      </form>
    </div>
  );
}

export default CourseForm;







