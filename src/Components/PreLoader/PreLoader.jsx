import React from "react";
import "./PreLoader.scss";
import mo from "../../Assets/img/USD_passport_picture.JPG";


const PreLoader = () => {
  return (
    <div className="preloader">
      <div className="preloader__inner">
        <div class="content">
          <h2>Ayodeji</h2>
          <h2>Ayodeji</h2>
        </div>
        <p>Frontend Developer</p>
        <img src={mo} alt="Ayodeji" className="preloader__img" />
      </div>
      <br />

    </div>
  );
};

export default PreLoader;
