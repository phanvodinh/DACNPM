import React, { useContext } from 'react'
import Add from "../img/img.png"
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    // const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className="logo">Chat App</span>
      <div className="user">
        <img src={Add} alt=""/>
        <span>CKH</span>
        <button onClick={()=>signOut(auth)}>Đăng xuất</button>
      </div>
    </div>
  )
}

export default Navbar