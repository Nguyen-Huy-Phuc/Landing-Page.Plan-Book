import React from "react";
import "./Footer.css";
import Wave from "../img/wave.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

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
