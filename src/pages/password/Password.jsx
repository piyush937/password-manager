import * as React from "react";
import add from "../../img/add.svg";
import gallery from "../../img/gallery.svg";
import search from "../../img/search.svg";
import settings from "../../img/settings.svg";
import favourite from "../../img/favourite.svg";
import profile from "../../img/profile.svg";
import addcircle from "../../img/addcircle.svg";

function PasswordItem({ appName, email }) {
  return (
    <>
      <div className="password-item">
        <img
          loading="lazy"
          src={gallery}
          className="app-icon"
          alt={`${appName} app icon`}
        />
        <div className="app-info">
          <div className="app-name">{appName}</div>
          <div className="app-email">{email}</div>
        </div>{" "}
      </div>
      <style jsx>
        {`
          .password-item {
            border-bottom: 1px solid rgba(231, 232, 232, 1);
            display: flex;
            align-items: start;
            gap: 13px;
            padding: 10px;
          }

          .app-icon {
            width: 54px;
            aspect-ratio: 1.1;
            object-fit: auto;
            object-position: center;
          }

          .app-info {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            width: fit-content;
          }

          .app-name {
            color: #fff;
            font: 700 24px Poppins, sans-serif;
          }

          .app-email {
            color: #9b9b9b;
            margin-top: 4px;
            font: 400 16px Poppins, sans-serif;
          }

          @media (max-width: 480px) {
            .app-name {
              font-size: 20px;
            }
            .app-email {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  );
}

function BottomNavItem({ icon, label, isActive, onClick }) {
  return (
    <>
      <div
        className={`bottom-nav-item ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        <img src={icon} className="bottom-nav-icon" alt={`${label} icon`} />
        <div className="bottom-nav-label">{label}</div>
      </div>
      <style jsx>
        {`
          .bottom-nav-item {
            display: flex;
            flex-direction: column;
            font-size: 8px;
            padding: 3px 0;
            cursor: pointer;
          }

          .bottom-nav-item.active {
            color: #fff;
          }

          .bottom-nav-icon {
            align-self: center;
            width: 20px;
            height: 20px;
          }

          .bottom-nav-label {
            font-family: Poppins, sans-serif;
          }

          @media (max-width: 480px) {
            .bottom-nav-item {
              font-size: 7px;
            }
          }
        `}
      </style>
    </>
  );
}

export default function Password() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeNavItem, setActiveNavItem] = React.useState("password");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const passwordItems = [
    { appName: "Facebook", email: "john@example.com" },
    { appName: "Twitter", email: "john@example.com" },
    { appName: "Instagram", email: "john@example.com" },
    { appName: "LinkedIn", email: "john@example.com" },
    { appName: "GitHub", email: "john@example.com" },
  ];
  const filteredPasswordItems = passwordItems.filter((item) =>
    item.appName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };   
  return (
    <>
      <div className="container">
        <header className="header">
          <h1 className="title">Password</h1>
          <img
            loading="lazy"
            src={add}
            className="header-icon"
            alt="Password icon"
          />
        </header>
        <div className="search-bar">
          <img
            loading="lazy"
            src={search}
            className="search-icon"
            alt="Search icon"
          />
          <input
            type="text"
            className="search-input"
            placeholder="Search Password"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="password-list">
          {filteredPasswordItems.map((item, index) => (
            <PasswordItem key={index} {...item} />
          ))}
        </div>
        <footer
          className="piyush-footer footer"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div 
            style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
            }}
            >
              <p
                style={{
                  fontSize: "24px",
                }}
              >
                *
              </p>
              <p
                style={{
                  fontSize: "24px",
                }}
              >
                *
              </p>
              <p
                style={{
                  fontSize: "24px",
                }}
              >
                *
              </p>
              <p
                style={{
                  fontSize: "24px",
                }}
              >
                *
              </p>
            </div>

            <div
              style={{
                width: "100%",
                height: "2px",
                background: "white",
              }}
            ></div>
            <p
              style={{
                fontSize: "12px",
              }}
            >
              Password
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor:"pointer",
            }}
            onClick={() =>{
              window.location.href = '/favourite';
            }}
          >
            <img
              src={favourite}
              alt=""
              style={{
                width: "18px",
                height: "18px",
              }}
            />
            <p>Favourite</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() =>{
              window.location.href = '/profile';
            }}
          >
            <img
              src={profile}
              alt=""
              style={{
                width: "18px",
                height: "18px",
              }}
            />
            <p>Profile</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() =>{
              window.location.href = '/generatePassword';
            }}
          >
            <img
              src={addcircle}
              alt=""
              style={{
                width: "18px",
                height: "18px",
              }}
            />
            <p>Generate</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() =>{
              window.location.href = '/settings';
            }}
          >
            <img
              src={settings}
              alt=""
              style={{
                width: "18px",
                height: "18px",
              }}
            />
            <p>Setting</p>
          </div>
        </footer>
      </div>
      <style jsx>{`
        .piyush-footer img {
          width: 18px;
          height: 18px;
        }
        .container {
          border: 1px solid rgba(0, 0, 0, 1);
          background-color: #424549;
          display: flex;
          width: 100vw;
          flex-direction: column;
          justify-content:center;
        //   padding:20px;
          height: 100vh;
          align-items:center;
        }
        .header {
          align-self: center;
          display: flex;
        //   width: 100%;
          gap: 20px;
          font-size: 34px;
          color: #fff;
          font-weight: 700;
        }
        .title {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .header-icon {
          width: 37px;
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
        }
        .search-bar {
          border-radius: 10px;
          border: 1px solid rgba(155, 155, 155, 1);
          display: flex;
          margin-top: 12px;
          gap: 11px;
          font-size: 20px;
          color: #9b9b9b;
          font-weight: 400;
          padding: 4px 0;
          width: 80%;
          margin-bottom: 10px;
        }
        .search-icon {
          width: 41px;
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
        }
        .search-input {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
          background: none;
          border: none;
          color: #fff;
          outline: none;
        }
        .password-list {
          border-radius: 25px;
          border: 2px solid rgba(255, 255, 255, 1);
          display: flex;
          margin-top: 13px;
          flex-direction: column;
          width: 80%;
          margin-bottom: 10px;
        }
        .footer {
          border-radius: 10px;
          border: 1px solid rgba(155, 155, 155, 1);
          display: flex;
          margin-top: 12px;
        //   gap: 20px;
          color: #9b9b9b;
          font-weight: 400;
          justify-content: space-between;
          padding: 5px 18px;
          width: 80%;
        }
        .password-display {
          justify-content: center;
          display: flex;
          flex-direction: column;
          color: #fff;
          padding: 9px 0;
        }
        .password-text {
          font: 20px Poppins, sans-serif;
        }
        .password-icon {
          width: 44px;
          aspect-ratio: 20;
          object-fit: auto;
          object-position: center;
          stroke-width: 2px;
          stroke: #fff;
          border: 2px solid rgba(255, 255, 255, 1);
          align-self: center;
          margin-top: 5px;
          cursor: pointer;
        }
        .password-label {
          margin-top: 5px;
          font: 8px Poppins, sans-serif;
        }
        .bottom-nav {
          display: flex;
          gap: 20px;
          margin: auto 0;
        }
        .footer-icon {
          width: 38px;
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          margin: auto 0;
        }
        @media (max-width: 480px) {
          .container {
            padding: 40px 15px 25px;
          }
          .header {
            font-size: 28px;
            gap: 15px;
          }
          .header-icon {
            width: 30px;
          }
          .search-bar {
            font-size: 16px;
            gap: 8px;
            padding: 2px 0;
          }
          .search-icon {
            width: 35px;
          }
          .password-list {
            padding: 20px 8px 60px;
          }
          .footer {
            // gap: 15px;
            // padding: 4px 12px;
            width: 80%;
          }
          .password-text {
            font-size: 18px;
          }
          .password-icon {
            width: 38px;
          }
          .password-label {
            font-size: 7px;
          }
          .bottom-nav {
            gap: 15px;
          }
          .footer-icon {
            width: 32px;
          }
        }
      `}</style>
    </>
  );
}
