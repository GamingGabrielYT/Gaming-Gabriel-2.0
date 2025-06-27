import "bootstrap/dist/css/bootstrap.css";
import "./STyles.css";
import React from "react";
function RDR(){
    return(
        <div className="text-white text-center">
            <div className="jumbotron jumbotron-fluid jumbo2"></div>
            <h1>Red Dead Redemption</h1>
            <div className="row">
                <div className="col-md-6 colmddiv3">
                    <h3>Story</h3>
                    <p>Red Dead Redemption (RDR1) tells the story of John Marston, a former outlaw forced by government agents to hunt down his old gang members. Set in 1911, the game follows Marston's journey across the American West as he confronts his past and the changing landscape of the frontier while trying to protect his family. </p>
                </div>
                <div className="col-md-6">
                    <img id="imageimage2"src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/04/red-dead-redemption.jpg" alt="img"/>
                </div>
            </div>
            <div className="row rowrow">
                <div className="col-md-6">
                    <img id="imageimage3"src="https://upload.wikimedia.org/wikipedia/en/a/a7/Red_Dead_Redemption.jpg" alt="img"/>
                </div>
                <div className="col-md-6 colmddiv4">
                    <h3>About</h3>
                    <p>Red Dead Redemption is a 2010 action-adventure game developed by Rockstar San Diego and published by Rockstar Games. A successor to 2004's Red Dead Revolver, it is the second game in the Red Dead series. Red Dead Redemption is set during the decline of the American frontier in the year 1911</p>
                </div>
            </div>
            <footer className="text-center text-white bg-tertiary">© Copyrighted by Gaming Gabriel. All rights reserved.</footer>
        </div>
    );
}
export default RDR;