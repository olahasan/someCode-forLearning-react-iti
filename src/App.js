import React, { useState } from "react";
import CourseForm from './Components/CourseForm/CourseForm';
import CourseList from './Components/CourseList/CourseList';
import Iti from './Components/Iti'
import Profile from './Components/Profile'
import Sent from './Components/Sent/Sent'

const App = () => {

const[Courses, setCourses] = useState([
  {name:"Html"},
  {name:"Css"},
  {name:"Js"}
])

const[Current, setCurrent] = useState('')

// UpdataCourse
const UpdataCourse = (e) => {
  console.log(e.target.value)
  setCurrent(e.target.value)
}

// AddCourse
const AddCourse = (e) => {
  e.preventDefault();
  console.log("course add")

  // let OneItem = Current;
  // let AllItem = Courses;
  // let PutTogether = AllItem.push({name:OneItem})

  let Current = {name:"OneItem"};
  let OneItem = Current;
  
  // let AllItem = Courses;
  let PutTogether = Courses.push(OneItem)

  setCourses(Courses)
  setCurrent('')
  // console.log(PutTogether)
}

  return (
    <section className="App">
       <h2>Add Courses</h2>
       <CourseForm UpdataCourse={UpdataCourse} AddCourse={AddCourse} Current={Current}/>
       <CourseList Courses={Courses}/>
       <Iti />
       <Profile />
       <Sent />
    </section>
  );
}

export default App;
