import React from "react";
import "./Footer.css";
import Wave from "../img/wave.png";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          {/* <FaInstagramSquare color="white" size={"5rem"} /> */}
          <FaFacebook color="white" size={"5rem"} />
          <FaGithub color="white" size={"5rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
