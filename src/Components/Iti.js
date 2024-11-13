import React, { useState } from 'react'
import NavScrollExample from './NavScrollExample'
import Tboot from './Tboot'
import Sent from './Sent/Sent';

import Button from 'react-bootstrap/Button';


function Iti() {

  const[User, setUser] = useState({
    Name : "mmm",
    Age : 333 ,
    isLogged: "false",
  })

  return (
 <div>
  <p>ola</p>
  <NavScrollExample />
  <Tboot />
  {User.isLogged ? "youyouyou" : <Sent />}
 </div>
  )
}

export default Iti