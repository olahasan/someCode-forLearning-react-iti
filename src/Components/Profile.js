import React, { useState } from 'react'


function Profile() {


const[Profile, setProfile] = useState({
    firstName: "ola",
    lastName: "ali",
    age: 27,
})

const[ProfileError, setProfileError] = useState({
    firstNameError: null,
    lastNameError: null,
    ageError: null,
})


const handleFormChange = (e) => {
    console.log(e.target.value , e.target.name)
    switch(e.target.name){
        case "firstName":
        setProfile({
            ...Profile,
            firstName: e.target.value,
        });
            setProfileError({
                ...ProfileError,
                firstNameError: e.target.value.length === 0 ? "this file is mandatory" : e.target.value.length < 3 ? "minimum length is 3 letters": null,
            })
        break;

        case "lastName":
        setProfile({
            ...Profile,
            lastName: e.target.value,
        });
            setProfileError({
               ...ProfileError,
               lastNameError: e.target.value.length === 0 ? "this file is mandatory" : null,
            })
        break;

        case "age":
        setProfile({
            ...Profile,
            age: e.target.value,
        });
            setProfileError({
                ...ProfileError,
                ageError: e.target.value.length === 0 ? "this file is mandatory" : null,
            })
        break;

        default:
        break;
    }
}

const formSubmit = () => {
    console.log("submit");
    console.log(Profile);
}

  return (
    <div className='w-50 mx-auto my-5'>
        Profile
      <input className={`form-control mb-3 ${ProfileError.firstNameError ? "border-danger" : ""}`} placeholder='first name' value={Profile.firstName} onChange={handleFormChange} name="firstName"/>
      <small className='text-danger'>{ProfileError.firstNameError}</small>
      <input className={`form-control mb-3 ${ProfileError.lastNameError ? "border-danger" : "border-info"}`} placeholder='last name' value={Profile.lastName} onChange={handleFormChange} name="lastName"/>
      <small className='text-danger'>{ProfileError.lastNameError}</small>
      <input className='form-control mb-3' placeholder='age name' value={Profile.age} onChange={handleFormChange} name="age"/>
      <small className='text-danger'>{ProfileError.ageError}</small>
      <button className='btn btn-primary w-100' onClick={formSubmit}>save</button>
    </div>
  )
}

export default Profile