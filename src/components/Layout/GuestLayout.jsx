import {Navigate, Outlet} from 'react-router-dom';
// import useAuthContext from '../../context/AuthContextProvider';

export default function GuestLayout(){
    // const {user} = useAuthContext();
    const user = JSON.parse(localStorage.getItem('user-info'))
    if(user){
        return <Navigate to='/' />
    }
    return (
        <>
            <Outlet />
        </>
    )
}