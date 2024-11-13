import React from 'react'

const CourseList = ({Courses}) => {

    const MapOnAll = Courses.map((e)=>{
        return(
            <ul  key={Math.random()}>
                <li>{e.name}</li>
            </ul>
        )
     })
  return (
    <div>
        {MapOnAll}
    </div>
  )
}

export default CourseList