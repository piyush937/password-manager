import React from "react";
import BackIcon from "../../img/Sign_in_circle.svg";
import UserImageNotFound from "../../img/Img_box_fill.svg";
import SignOut from "../../img/Sign_out.png";
import DeleteIcon from "../../img/Trash_duotone_line.svg";
import "./style.css";
import Footer from "../../components/footer/Footer";
import DownloadIcon from "../../img/Import_light.png";
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const navigate = useNavigate();
  return (
    <div className="profile">
      <div className="header-profile">
        <img src={BackIcon} alt="Back icon in the profile page"
        style={{
            cursor:"pointer",
          }}
          onClick={() => navigate(-1)}
        />
        <h3>Profile</h3>
        <p>Edit</p>
      </div>
      <div className="main-image">
        <img src={UserImageNotFound} alt="" />
        <h4>User Name</h4>
      </div>
      <div className="form-details">
        <div className="registered-email">
          <p
            style={{
              color: "rgb(164 160 160)",
            }}
          >
            Registered email
          </p>
          <p
            style={{
              color: "white",
            }}
          >
            xyzpiyush@gmail.com
          </p>
        </div>
        <div className="download-backup">
          <p
          style={{
            color:"white",
            fontSize:"18px",
          }}
          >Download Backup</p>
          <img src={DownloadIcon} alt=""
          style={{
            cursor:"pointer",
          }}
          />
        </div>
        <div className="delete-logout">
          <div className="delete">
            <img src={DeleteIcon} alt=""
            style={{
                width:"30px",
                height:"30px",
                cursor:"pointer",
            }}
            />
            <p
            style={{
                color:"white",
                fontSize:"16px",
                marginLeft:"10px",
            }}
            >Delete Account</p>
          </div>
          <div className="logout">
            <img src={SignOut} alt="" 
            style={{
                width:"30px",
                height:"30px",
                cursor:"pointer",
            }}
            />
            <p
             style={{
                color:"white",
                fontSize:"16px",
                marginLeft:"10px",
            }}
            >Log Out</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
