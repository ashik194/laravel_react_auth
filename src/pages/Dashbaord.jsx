// eslint-disable-next-line no-unused-vars
import React from 'react'
import useAuthContext from '../context/AuthContextProvider';
import NothiDashboard from './NothiDashboard';
import { DakDashboard } from './DakDashboard';

const Dashbaord = () => {
  const user = JSON.parse(localStorage.getItem('user-info'));
    const {logout, token} =useAuthContext()

    console.log(token)
  return (
    <>
        <h1 className='text-6xl'>Dashboard {user?.name}</h1>
        {user?.name}
        {user?<button onClick={logout} className="btn-logout">Logout</button>:""}

        {token && user?.role === "3" ? <NothiDashboard /> : <DakDashboard />}
    </>
  )
}

export default Dashbaord