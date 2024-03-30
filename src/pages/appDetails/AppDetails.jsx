import React from "react";
import BackIcon from "../../img/Sign_in_circle.svg";
import UserImageNotFound from "../../img/Img_box_fill.svg";
import SignOut from "../../img/Sign_out.png";
import DeleteIcon from "../../img/Trash_duotone_line.svg";
import "./style.css";
import Footer from "../../components/footer/Footer";
import Copy from "../../img/Copy.png";
import HiddenEyes from "../../img/View_hide_light.png";
import External from '../../img/External.png';
import Star from '../../img/Star.png';
import { useNavigate } from "react-router-dom";

const AppDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="profile">
      <div className="header-profile">
        <img
          src={BackIcon}
          alt="Back icon in the profile page"
          onClick={() => navigate(-1)}
          style={{
            cursor: "pointer",
          }}
        />
        <h3>Company Name</h3>
        <p>Edit</p>
      </div>
      <div className="main-image">
        <img src={UserImageNotFound} alt="" />
        <h4>User Name</h4>
      </div>
      <div className="form-details">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="registered-email">
            <p
              style={{
                color: "rgb(164 160 160)",
              }}
            >
              Email / Username
            </p>
            <p
              style={{
                color: "white",
              }}
            >
              xyzpiyush@gmail.com
            </p>
          </div>
          <img src={Copy} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            className="registered-email"
            style={{
              marginTop: "10px",
            }}
          >
            <p
              style={{
                color: "rgb(164 160 160)",
              }}
            >
              Password
            </p>
            <p
              style={{
                color: "white",
              }}
            >
              **********
            </p>
          </div>
          <div>
            <img
              src={HiddenEyes}
              alt=""
              style={{
                marginRight: "10px",
              }}
            />
            <img src={Copy} alt="" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="registered-email"
          style={{
            marginBottom:"10px",
          }}
          >
            <p
              style={{
                color: "rgb(164 160 160)",
              }}
            >
              URL
            </p>
            <p
              style={{
                color: "white",
              }}
            >
              https://yourcompany.com
            </p>
          </div>
          <img src={External} alt="" />
        </div>
        <div className="delete-logout">
        <div className="logout"
        style={{
          marginBottom:"10px",
          marginTop:"20px",
        }}
        >
            <img
              src={Star}
              alt=""
              style={{
                width: "30px",
                height: "30px",
                cursor: "pointer",
              }}
            />
            <p
              style={{
                color: "white",
                fontSize: "16px",
                marginLeft: "20px",
                color:"#708BE9",
              }}
            >
              Add To Favourites
            </p>
          </div>
          <div className="delete">
            <img
              src={DeleteIcon}
              alt=""
              style={{
                width: "30px",
                height: "30px",
                cursor: "pointer",
              }}
            />
            <p
              style={{
                color: "white",
                fontSize: "16px",
                marginLeft: "20px",
              }}
            >
              Delete Account
            </p>
          </div>
         
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppDetails;
