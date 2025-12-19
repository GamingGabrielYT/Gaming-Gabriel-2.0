import "bootstrap/dist/css/bootstrap.css";
import "./Styles.css";
import React, { useState } from "react";
import axios from "axios";
function SignIN(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/sign-in", {
        email,
        password
      });

      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };
    return(
        <div className="text-white text-center">
            <h1>Sign In</h1>
            <div class="login-container">
        
        <img src="https://www.creativefabrica.com/wp-content/uploads/2023/05/08/Video-Game-Controller-Logo-Graphics-69127373-1.png" alt="logo"/>
        <h2 className="h2222">Sign in with your ID</h2>
        <form>
            <input type="email" placeholder="Your Email/ID" required onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Your Password" required onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" onClick={BTN}>Login</button>
        </form>
        <p className="pppptag"><a href="/sign-up" className="pppptag">Forgot ID or Password?</a></p>
    </div>
            <footer className="text-center text-white bg-tertiary footer">© Copyrighted by Gaming Gabriel. All rights reserved.</footer>
        </div>
    );
    function BTN(){
        alert("Your message has successfully been sent! We will try to respond within 5-24 hrs!")
    }
}
export default SignIN;