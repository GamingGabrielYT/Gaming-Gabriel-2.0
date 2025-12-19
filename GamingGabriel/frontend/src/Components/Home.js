import "bootstrap/dist/css/bootstrap.css";
import "./Styles.css";
import React from "react";
import { NavLink } from "react-router-dom";
function Home(){
    return(
        <div>
            <div className="jumbotron jumbotron-fluid hero-section text-center">
        <h1 id="H1">Welcome to Gaming Gabriel!</h1>
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
            <div className="container">
            <div className="row my-5">
  <div className="col-md-6 text-center col6">
  <div className="card bg-dark text-white p-4 card-fixed">
    <h3>About My Channel</h3>
    <p>Learn my story on YouTube and discover how Gaming Gabriel came to be!</p>
    <NavLink to="/about" className="btn btn-outline-light mt-2">Read More</NavLink>
  </div>
</div>

  <div className="col-md-6 text-center col6">
    <div className="card bg-dark text-white p-4">
      <h3>Gaming Products</h3>
      <p>High-end gear for gamers! From mice to PCs, check out my products.</p>
      <NavLink to="/products" className="btn btn-outline-light mt-2">Shop Now</NavLink>
    </div>
  </div>
</div>
</div>

            <footer className="text-center text-white bg-tertiary">© Copyrighted by Gaming Gabriel. All rights reserved.</footer>
        </div>
    );
}
export default Home;