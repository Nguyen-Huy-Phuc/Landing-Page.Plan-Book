import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Person from "../img/Teacher.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import crown from "../img/crown.png";
import Github from "../img/github.png";
import glassesimoji from "../img/glassesimoji.png";
import LinkedIn from "../img/linkedin.png";
import thumbup from "../img/thumbup.png";
import "./Intro.css";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme: any = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Plan Book</span>
          <span>Nền tảng Giáo dục Toàn diện cho Giáo viên</span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Tham gia miễn phí</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Person} style={{ width: "360px" }} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "61%" }}
          whileInView={{ left: "61%" }}
          // transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Quản lý giáo án" />
        </motion.div>

        <motion.div
          initial={{ top: "1rem", left: "-9%" }}
          whileInView={{ left: "-9%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Quản lý tài liệu" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Quản lý thời khóa biểu" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
