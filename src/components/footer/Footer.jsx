import React from "react";
import settings from "../../img/settings.svg";
import favourite from "../../img/favourite.svg";
import profile from "../../img/profile.svg";
import addcircle from "../../img/addcircle.svg";
import "./style.css"; // Import the CSS file

const Footer = () => {
  return (
    <div className="piyush-footer footer">
      <div>
        <div className="stars">
          <p>*</p>
          <p>*</p>
          <p>*</p>
          <p>*</p>
        </div>
        <div
          style={{
            width: "100%",
            height: "2px",
            background: "white",
          }}
        ></div>
        <p>Password</p>
      </div>
      <div
        style={{
          cursor: "pointer",
        }}
        onClick={() =>{
          window.location.href = '/favourite';
        }}
      >
        <img src={favourite} alt="" />
        <p>Favourite</p>
      </div>
      <div
        style={{
          cursor: "pointer",
        }}
        onClick={() =>{
          window.location.href = '/profile';
        }}
      >
        <img src={profile} alt="" />
        <p>Profile</p>
      </div>
      <div
        style={{
          cursor: "pointer",
        }}
        onClick={() =>{
          window.location.href = '/generate';
        }}
      >
        <img src={addcircle} alt="" />
        <p>Generate</p>
      </div>
      <div
        style={{
          cursor: "pointer",
        }}
        onClick={() =>{
          window.location.href = '/setting';
        }}
      >
        <img src={settings} alt="" />
        <p>Setting</p>
      </div>
    </div>
  );
};

export default Footer;
