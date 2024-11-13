import React from 'react'

const CourseForm = ({UpdataCourse, AddCourse , Current}) => {
  return (
    <form onSubmit={AddCourse}>
        <input type="text" value={Current} onChange={UpdataCourse}/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default CourseForm