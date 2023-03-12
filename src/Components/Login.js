import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { sendPasswordResetEmail } from "firebase/auth";




function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem('token',userCredential._tokenResponse.idToken,true );
        console.log(userCredential);
        alert("Login Successfull")
        navigate('/Home')
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
    <div className="container">
<form onSubmit={signIn}>

  
  <div className="containerr">
    <label  id="lab"><b>E-mail</b></label>
    <input type="text" placeholder="Enter E-mail" name="uname" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <label  id="lab"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required  value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <br></br><br></br>
    <button type="submit">Login</button>
   
    <label id="lab" className="lab"><b>New here?</b></label>
    <NavLink to="/Register">
    <button type="button" className="labs">Sign Up </button>
    </NavLink>
  </div>

</form>
</div>


  );
}
export default Login;