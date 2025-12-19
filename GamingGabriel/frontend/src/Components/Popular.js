import "bootstrap/dist/css/bootstrap.css";
import "./Styles.css";
import React from "react";
function Popular(){
    return(
        <div>
            <h1 className="text-white text-center">Popular Videos</h1>
            <div className="container">
                <div className="row">
                    <div class="card" style={{width: '23rem', height: '20rem'}}>
  <iframe  style={{borderRadius: '12.5px'}} src="https://www.youtube.com/embed/AphWIJVdC7E?si=cJNPyHP3ZR9FVzV_" width="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <div class="card-body">
    <h5 class="card-title">Playing Blitz In Fortnite!</h5>
    <p class="card-text"></p>
    <a href="https://www.youtube.com/embed/AphWIJVdC7E?si=cJNPyHP3ZR9FVzV_" className="btn btn-success">Watch Video</a>
  </div>
</div>          
                <div class="card" style={{width: '23rem', height: '20rem'}}>
  <iframe  style={{borderRadius: '12.5px'}} src="https://www.youtube.com/embed/JOVaQL2pKz0?si=CSB-lvaA3lM86EO2" width="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <div class="card-body">
    <h5 class="card-title">Playing MC With Physics Mod!</h5>
    <p class="card-text"></p>
    <a href="https://www.youtube.com/embed/JOVaQL2pKz0?si=CSB-lvaA3lM86EO2" className="btn btn-success">Watch Video</a>
  </div>
</div>

                <div class="card" style={{width: '23rem', height: '20rem'}}>
  <iframe  style={{borderRadius: '12.5px'}} src="https://www.youtube.com/embed/XvzyYFhVPEs?si=DuC63F7CT2gCT3l5" width="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <div class="card-body">
    <h5 class="card-title">How Fast Do Months Actually Pass?</h5>
    <p class="card-text"></p>
    <a href="https://www.youtube.com/embed/XvzyYFhVPEs?si=DuC63F7CT2gCT3l5" className="btn btn-success">Watch Video</a>
  </div>
</div>
                </div>
            </div>
            <footer className="text-center text-white bg-tertiary">© Copyrighted by Gaming Gabriel. All rights reserved.</footer>
        </div>
    );
}
export default Popular;