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
                    <p>Red Dead Redemption* follows former outlaw John Marston as he is forced by government agents to hunt down the remaining members of his old gang. As John confronts his past, he journeys across a lawless frontier filled with betrayal, moral conflict, and fading ideals. Along the way, he encounters memorable allies and dangerous foes who shape his quest for justice and freedom. The world around him is changing, and John struggles to escape the violent life he once knew. Ultimately, his quest for redemption comes at a heartbreaking cost, cementing the game as a powerful tale of sacrifice and the end of the Wild West.</p>
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
                    <p>Red Dead Redemption's development began in the mid-2000s at Rockstar San Diego, building on the foundation of Red Dead Revolver but aiming for a far more ambitious open-world western experience. The team created a new version of the Rockstar Advanced Game Engine (RAGE) to handle vast landscapes, dynamic weather, and realistic wildlife. Development was challenging, involving long hours and technical hurdles as the studio worked to craft a seamless frontier world. Rockstar’s global network of studios contributed to animation, writing, and mission design, helping shape the game’s cinematic tone. After years of refinement, the game released in 2010 and became one of the most acclaimed open-world titles ever made.</p>
                </div>
            </div>
            <footer className="text-center text-white bg-tertiary">© Copyrighted by Gaming Gabriel. All rights reserved.</footer>
        </div>
    );
}
export default RDR;