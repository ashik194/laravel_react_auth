// eslint-disable-next-line no-unused-vars
import React from 'react'
import useAuthContext from '../context/AuthContextProvider';
import Navbar from "../components/Navbar"

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user-info'));
    const {logout} =useAuthContext()
  return (
    <div> 
        <Navbar />
        <h1 className='text-6xl'>This is home page {user?.name}</h1>
        {user?.name}
        {user?<button onClick={logout} className="btn-logout">Logout</button>:""}
    </div>
  )
}

export default Home