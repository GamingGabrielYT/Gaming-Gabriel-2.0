import "bootstrap/dist/css/bootstrap.css";
import "./Styles.css";
import React from "react";
function Popular(){
    return(
        <div>
            <h1 className="text-white text-center">Popular Videos</h1>
            <div className="row">
                <div className="col-md-6 iframe">
               <iframe id="iframe1" src="https://www.youtube.com/embed/-GIv92ix-to?si=xNM4_clOFinUwDNP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               </div>
               <div className="col-md-6 col-6">
               <p>In this video, GG tries to go to space on a rocket ship. He then explores the hidden planets of the Milky Way.</p>
               </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-6">
                    <p>GG, in this video played a popular game called "Rocket League". Rocket League is a soccer game but using cars as players.</p>
                </div>
                <div className="col-md-6">
                    <iframe id="iframe2"width="560" height="315" src="https://www.youtube.com/embed/-cskSZzaEEo?si=LKXWAUwzrjkAv-oc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <iframe id="iframe3"width="560" height="315" src="https://www.youtube.com/embed/nOkBMN_j_GI?si=Rz4paa04YCfcJsYv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="col-md-6 col-6">
                    <p>In this video, GG attempts to steal from a multi millionaire's island in Grand Theft Auto V. GG then succeeds on stealing everything stealthy and earning up to $1,000,000 dollars.</p>
                </div>
            </div>
            <footer className="text-center text-white bg-tertiary">© Copyrighted by Gaming Gabriel. All rights reserved.</footer>
        </div>
    );
}
export default Popular;