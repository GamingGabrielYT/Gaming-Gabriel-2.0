import "bootstrap/dist/css/bootstrap.css";
import "./Styles.css";
import React from "react";
function CSupport(){
    return(
        <div className="text-white text-center">
            <h1>Customer Support</h1>
            <div className="divdiv">
            <form className="form">
                <label className="form-label">Name: </label><input type="text" className="form-control" placeholder="Name"/><br/>
                <label className="form-label">Email:</label><input type="email" className="form-control" placeholder="Email"/><br/>
                <label className="form-label">Message:</label><textarea row="5" cols="30"className="form-control" placeholder="Write Your Message Here:" id="input"></textarea>
                <br/>
                <input type="button" className="btn btn-outline-primary" value="Submit Message" onClick={BTN}/>
            </form>
            </div>
            <footer className="text-center text-white bg-tertiary footer">© Copyrighted by Gaming Gabriel. All rights reserved.</footer>
        </div>
    );
    function BTN(){
        alert("Your message has successfully been sent! We will try to respond within 5-24 hrs!")
    }
}
export default CSupport;