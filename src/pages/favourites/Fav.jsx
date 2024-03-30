import React from "react";
import "./style.css";
import gallery from "../../img/gallery.svg";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Fav = () => {
  const navigate = useNavigate();

  const passwordItems = [
    { appName: "Facebook", email: "john@example.com" },
    { appName: "Twitter", email: "john@example.com" },
  ];
  function PasswordItem({ appName, email }) {
    return (
      <>
        <div
          className="password-item"
          onClick={() => {
            window.location.href = "/appDetails";
          }}
        >
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
              cursor: pointer;
              transition: 0.5s ease-in-out;
            }
            .password-item:hover {
              background: #e3e3e3;
              color: black;
            }
            .password-item:hover .app-name {
              color: black;
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
  return (
    <div className="favourite-page">
      <div className="main-heading">
        <h3>Favourite</h3>
      </div>
      <div className="main-content">
        {passwordItems.map((item, index) => (
          <PasswordItem key={index} {...item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Fav;
