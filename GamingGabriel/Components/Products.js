import "bootstrap/dist/css/bootstrap.css";
import "./Styles.css";
import React from "react";
function Products(){
   return(
    <div className="text-white text-center">
        <h1>Products</h1>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://wallpapers.com/images/hd/gaming-mice-1600-x-900-wallpaper-vitcrhi4vf0gfvzn.jpg" className="d-block w-100" alt="img" style={{height:"500px"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20230525/pngtree-the-lighting-of-the-gaming-keyboard-in-full-rainbow-color-image_2620112.jpg" style={{height:"500px"}}class="d-block w-100" alt="img"/>
    </div>
    <div className="carousel-item">
      <img src="https://evolvegamingpc.com.au/cdn/shop/files/0924_EGPC-22_1_1.png?v=1725960321&width=5090" style={{height:"500px"}}class="d-block w-100" alt="img"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  <div className="container">
    <div className="row">
        <div className="card col-md ">
            <img className="card-img-top image" src="https://www.cnet.com/a/img/resize/147fb20d4f271ebfdaf04bb2a5bd63b5045f15ca/hub/2022/08/29/dccd5e89-0258-4d04-b381-793bea9a3076/low-resolution-jpg-g502-x-plus-black-lightspeed-hex-oh-1920x1080-1.jpg?auto=webp&fit=crop&height=675&width=1200" alt="img"/>
            <div className="card-body">
                <h4>Logitech G502 Mouse</h4>
                <p>The Logitech G502 is a fast, highly responsive, with fast input mouse. Despite of its looks, the G502 is popular among the gaming community.</p>
                <button className="btn btn-outline-primary"><a href="https://www.amazon.ca/Logitech-Performance-Gaming-Mouse-910-005469/dp/B07GBZ4Q68?th=1">Order Now</a></button>
            </div>
        </div>
        <div className="card col-md">
            <img className="card-img-top image" src="https://images.ctfassets.net/hmm5mo4qf4mf/13ja7CZSmUAW5RQlo0KUAP/81c4caad94a62454c730e2d3882402e4/apex_pro_black_imgbuy_2.png__1920x1080_crop-fit_optimize_subsampling-2-2137.png" alt="img"/>
            <div className="card-body">
                <h4>SteelSeries Apex Pro HyperMagnetic Keyboard</h4>
                <p>The SteelSeries Apex Pro HyperMagnetic keyboard is a clicky, fast, and a popular keyboard used by gamers.</p>
                <button className="btn btn-outline-primary"><a href="https://www.amazon.ca/SteelSeries-Apex-Mechanical-Gaming-Keyboard/dp/B07SVJJCP3/ref=asc_df_B07SVJJCP3?mcid=2032a58729dc30d299150cc3d869e251&tag=googleshopc0c-20&linkCode=df0&hvadid=706733890242&hvpos=&hvnetw=g&hvrand=8424084569699067399&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9192603&hvtargid=pla-805755471045&psc=1&hvocijid=8424084569699067399-B07SVJJCP3-&hvexpln=0&gad_source=1">Order Now</a></button>
            </div>
        </div>
        <div className="card col-md ">
            <img className="card-img-top image" src="https://www.lbtechreviews.com/wp-content/uploads/2022/06/Alienware-AW3423DW-SPREAD-scaled-1-1080x608.jpg" alt="img"/>
            <div className="card-body">
                <h4>Alienware 34 QD-Oled</h4>
                <p>Alienware 34, is a high choice of a monitor among us gamers. This monitor has 240hz refresh rate and is OLED which gives gamers a massive graphical improvement.</p>
                <button className="btn btn-outline-primary"><a href="https://www.amazon.ca/Alienware-QD-OLED-Curved-Gaming-Monitor/dp/B0F6724X5N/ref=asc_df_B0F6724X5N?mcid=23717d6337fd300f9c5712c01b9aad48&tag=googleshopc0c-20&linkCode=df0&hvadid=706724917431&hvpos=&hvnetw=g&hvrand=6567808322985500689&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9192603&hvtargid=pla-2418034204780&psc=1&hvocijid=6567808322985500689-B0F6724X5N-&hvexpln=0&gad_source=1">Order Now</a></button>
            </div>
        </div>
    </div>
    <div className="row">
      <div className="card col-md">
        <img className="card-img-top image" src="https://i.pinimg.com/736x/5f/ca/94/5fca943a734bdc82a2b865dad5dd9427.jpg" alt="img"/>
        <div className="card-body">
        <h4>
          Logitech G733 Lightspeed Wireless Headset
          </h4>
        <p>
          The famous Logitech G733 Lightspeed Wireless is a headset which gives gamers a feel that they can hear everything 360-degress.
          </p>
        <button className="btn btn-outline-primary"><a href="https://www.amazon.ca/Logitech-LIGHTSPEED-suspension-LIGHTSYNC-technology/dp/B081415GCS/ref=asc_df_B081415GCS?mcid=36f2b0cd7e763a85a020e70a5e72db9f&tag=googleshopc0c-20&linkCode=df0&hvadid=706731432645&hvpos=&hvnetw=g&hvrand=18311859223300127698&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9192603&hvtargid=pla-954467635673&psc=1&hvocijid=18311859223300127698-B081415GCS-&hvexpln=0&gad_source=1">Order Now</a></button>
        </div>
      </div>
      <div className="card col-md">
        <img className="card-img-top image" src="https://m.media-amazon.com/images/I/61ka9r618QL._AC_SL1280_.jpg" alt="img"/>
        <div className="card-body">
        <h4>Skytech O11V Gaming PC</h4>
        <p>This gaming PC is a state-of-the-art build, this build consists of a Ryzen 7 7700X CPU, Nvidia RTX 4070 Super 12GB VRAM, 1TB Gen4 SSD, 32GB DDR5 Ram.</p>
        <button className="btn btn-outline-primary"><a href="https://www.amazon.ca/Skytech-Gaming-Desktop-5-4GHz-NVIDIA/dp/B0DDDTH77V/ref=asc_df_B0DDDTH77V?mcid=3a1e600cd25a3079b7221fa2d8812289&tag=googleshopc0c-20&linkCode=df0&hvadid=706724917191&hvpos=&hvnetw=g&hvrand=9599087304641147452&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9192603&hvtargid=pla-2366400323424&hvocijid=9599087304641147452-B0DDDTH77V-&hvexpln=0&gad_source=1&th=1">Order Now</a></button>
        </div>
      </div>
      <div className="card col-md">
        <img className="card-img-top image" src="https://m.media-amazon.com/images/I/81fwJfCNVJL._AC_SL1500_.jpg" alt="img"/>
        <div className="card-body">
        <h4>Samsung 32" Curved Gaming Monitor 240hz QHD Odyssey</h4>
        <p>
          ABOUT THIS MONITOR: Speed through scenes. 240Hz refresh rate minimizes lag for exhilarating gameplay with ultra-smooth action. Jump on enemies right when you see them with a 1ms response time.
        </p>
        <button className="btn btn-outline-primary">
          <a href="">
            Order Now
            </a>
          </button>
        </div>
      </div>
    </div>
    </div>
    <footer className="text-center text-white bg-tertiary">
      © Copyrighted by Gaming Gabriel. All rights reserved.
    </footer>
    </div>
   );
}
export default Products;