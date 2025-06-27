import "bootstrap/dist/css/bootstrap.css";
import "./STyles.css";
import React from "react";
function RDR2(){
    return(
        <div className="text-white text-center">
            <br/>
            <br/>
            <br/>
            <div className="jumbotron jumbotron-fluid jumbo">
            </div>
            <div className="row">
                <div className="col-md-6 colmddiv">
                    <h3>Story</h3>
                    <p>Red Dead Redemption 2 tells the story of Arthur Morgan, an outlaw and member of the Van der Linde gang, as they struggle to survive and adapt to the changing landscape of the American West in 1899. The gang is on the run after a botched robbery in Blackwater, facing pressure from lawmen and rival gangs.</p>
                </div>
                <div className="col-md-6">
                    <img id="imageimage"src="https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/wQYnx73VVaaHKanoA4EI44j6KxwO4eAj.png?w=440&thumb=false" alt="img"/>
                </div>
            </div>
            <div className="row row1">
                <div className="col-md-6">
                    <img id="imageimage"src="https://i.redd.it/js2c4k81pa081.jpg" alt="img"/>
                </div>
                <div className="col-md-6 colmddiv2">
                    <h3>About</h3>
                    <p>Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption.</p>
                </div>
            </div>
            <footer className="text-center text-white bg-tertiary">© Copyrighted by Gaming Gabriel. All rights reserved.</footer>
        </div>
    );
}
export default RDR2;