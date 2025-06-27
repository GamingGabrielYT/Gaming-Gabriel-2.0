import "bootstrap/dist/css/bootstrap.css";
import "./Styles.css";
import React from "react";
import { NavLink } from "react-router-dom";
function Home(){
    return(
        <div>
            <div className="jumbotron jumbotron-fluid text-center">
                <h1>Welcome to <h1 id="H1">Gaming Gabriel</h1> Website!</h1>
            </div>
            <div className="row">
                <div className="col-md-6 text-center text-white col6">
                    <p>My website here is a fun and engaging website which talks about my YouTube Channel @Gaming_Gabriel. This website offers the history of my channel, my story with YouTube, etc!</p>
                    <br/>
                    <p>My website here sells the state of the art gaming products from mice, to keyboards, to PCs. Check my products here: <NavLink to="/products"><a>Gaming Products</a></NavLink>! </p>
                </div>
                <div className="col-md-6 col6">
                    <img src="https://t3.ftcdn.net/jpg/02/85/90/44/360_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg" alt="img" id="image1"/>
                </div>
            </div>
            <footer className="text-center text-white bg-tertiary">© Copyrighted by Gaming Gabriel. All rights reserved.</footer>
        </div>
    );
}
export default Home;