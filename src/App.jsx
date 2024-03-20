import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Layout from './components/Layout' 
import Home from './components/Home'
import NotFoundPage from './components/NotFoundPage'
import ProtectedRoute from './components/ProtectedRoute'
import GuestLayout from './components/Layout/GuestLayout'
import AuthLayout from './components/Layout/AuthLayout'
import Dashboard from "./pages/Dashbaord"


function App() {
const user = JSON.parse(localStorage.getItem('user-info'))
console.log(user)
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<AuthLayout />}>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/' element={<Dashboard />} />
          </Route>
          {/* public routes */}
          <Route element={<GuestLayout />}>
            <Route path="/login" element={<Login />} /> 
          </Route>
          

          {/* <Route element={<ProtectedRoute />} >
            <Route path="/" element={<Home />} /> 

          </Route> */}
 
          <Route path="*" element={<NotFoundPage />} />
        </Route>
    </Routes>
    </>
  )
}

export default App
