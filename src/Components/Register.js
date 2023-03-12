import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState,useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; 

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        alert(" Registration Successfull")
        navigate("/Login")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(()=>{
    if(window.localStorage.getItem('token')){
      navigate('/Home')
    }
  },[])

  return (
    <>
    
   <div className="container ">
   <form onSubmit={signUp}>
   <div className="containerr ">
    <label  id="lab"><b>E-mail</b></label>
    <input type="text" placeholder="Enter E-mail" name="uname" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <label  id="lab"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required  value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <br></br><br></br>
    <button type="submit">Signup</button>
    
    </div>
    </form>
    </div>
   
    
    </>
  );
};

export default Register;