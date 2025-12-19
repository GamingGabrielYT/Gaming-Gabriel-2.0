import "bootstrap/dist/css/bootstrap.css";
import "./Styles.css";
import React from "react";
function About(){
    return(
        <div>
            <div className="row">
                <div className="col-md-4 text-center text-white col6 paragrapH">
                    <h3 className="h3">About My Channel</h3>
                    <p>Welcome to Gaming Gabriel, your ultimate destination for all things gaming! Whether you’re a seasoned gamer or just starting your journey, we’re here to fuel your passion with the latest gaming news, reviews, and in-depth guides. At Gaming Gabriel, we believe gaming is more than just a hobby—it’s a way of life. Our mission is to create a vibrant community where gamers of all skill levels can connect, share experiences, and stay updated with the rapidly evolving world of gaming. From cutting-edge console games to the hottest PC titles, we cover it all!</p><br/>
                </div>
                <div className="col-md-6 col6">
                    <img src="https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2021/07/01091502/abstract_digital-gamepad-sl-800x450.jpg" alt="img" id="image2"/>
                </div>
            </div>
             <footer className="text-center text-white bg-tertiary">© Copyrighted by Gaming Gabriel. All rights reserved.</footer>
        </div>
    );
}
export default About;