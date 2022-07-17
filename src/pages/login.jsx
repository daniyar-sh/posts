import React,{ useContext } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { AuthContext } from "../context";


 const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
     const login = event => {
         event.preventDefault()
         setIsAuth(true)
     }
     return(
         <div>
             <h1>Страница для логина </h1>
             <form onSabmit={login}>
                 <MyInput type='text' placeholder='Ведите логин' />
                 <MyInput type='password' placeholder='Ведите пароль' />
                 <MyButton>Войти</MyButton>
             </form>
         </div>
     )
 }

 export default Login 