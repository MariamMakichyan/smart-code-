
import { useState } from "react";
import ButtonMain from "../ButtonMain/ButtonMain";
import SocialLinks from "../Social-links/Social-link";
import "./Header.css";

function Header({ socmedia, onRegisterClick }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };


    const handleOverlayClick = (e) => {
    if (e.target.classList.contains("video-popup")) {
      setIsVideoOpen(false);
    }
  };

  return (
    <header className="header-main" id="headerId">
      <div className="container">
        <div className="header-info">
          <h1>
            <span>Սովորի՛ր </span>
                 ծրագրավորում
            <br />
            <span>Դարձի՛ր </span>
               պահանջված մասնագետ
          </h1>
          <p>Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։</p>

  
          <div className="header-action">
            <ButtonMain href="#" text="Սկսե՛լ ուսումը" onClick={onRegisterClick} />

      
            <a href="#" className="but-play" onClick={openVideo}>
              <i className="far fa-play-circle"></i>Տեսանյութ
            </a>
          </div>

          <SocialLinks socialLinks={socmedia} />
        </div>

        <img
          src="https://smartcode.am/public/image/header.svg"
          className="header-image"
          alt="Header visual"
        />
      </div>


      {isVideoOpen && (
        <div className="video-popup active">
          <div className="video-content">
            <span id="closePopup" onClick={closeVideo}>
              &times;
            </span>
            <video id="myVideo"  controls autoPlay>
              <source src="https://smartcode.am/public/video/video.mp4" type="video/mp4"  />
             
            </video>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

