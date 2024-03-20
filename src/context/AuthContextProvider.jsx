import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../api/axios";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext({
    user: null,
    token: null, 
    setUser: () => {},
    setToken: () => {}, 
});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const getUser = async () => {
        try{
            const {data} = await axiosClient.get('/user');
            setUser(data);
        }catch(err){
            console.log(err);
        }
    }

    const login = async ({...data}) => {
        await csrf();
        const payload = {
            email: data.email,
            password: data.password
          }
          setErrors(null)
          axiosClient.post('/login', payload)
            .then(({data}) => {
              setUser(data.user)
              setToken(data.token)
              localStorage.setItem('ACCESS_TOKEN',data.token);
              localStorage.setItem('user-info',JSON.stringify(data.user))
            })
            .catch(e => {
              const response = e.response;
              if(response && response.status === 422) {
                // console.log(response.data.errors)
                if(response.data.errors){
                    setErrors(response.data.errors)
                }else{
                    setErrors({
                            email: [response.data.message]
                        })
                }
              }
            })
    }

    const logout = async () => {
        await csrf();
        setErrors([]);
        try{
            await axiosClient.post('/logout');
            setUser(null);
            localStorage.removeItem('user-info');
            localStorage.removeItem('ACCESS_TOKEN')
            navigate("/login");
        }catch(e){
            setErrors(e.response.data.errors);
        }
    }

    return (
        <AuthContext.Provider value={{user, errors, getUser, login,logout, csrf, token}}>
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuthContext(){
    return useContext(AuthContext);
}