import { motion } from "framer-motion";
import { useContext } from "react";
import { themeContext } from "../../Context";
import Card from "../Card/Card";
import Glasses from "../img/glasses.png";
import HeartEmoji from "../img/heartemoji.png";
import Humble from "../img/humble.png";
import Resume from "./resume.pdf";
import "./Services.css";

const Services = () => {
  // context
  const theme: any = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Mục nổi bật</span>
        <span>Các tính năng</span>
        <span>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>
        <a href={Resume} download>
          <button className="button s-button">Tham gia miễn phí</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ top: "-2rem", left: "25rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Tài liệu"}
            detail={
              "Lưu trữ các công văn, văn bản giáo dục mới nhất. Cập nhật thông tin ngay tức thì."
            }
            contentSubmit={"Xem tài liệu"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Kho giáo án"}
            detail={
              "Kho giáo án đa dạng từ các giáo viên trên toàn hệ thống. Dễ dàng tìm kiếm và tải xuống."
            }
            contentSubmit={"Xem kho giáo án"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Thời khóa biểu"}
            detail={
              "Quản lý thời gian giảng dạy hiệu quả. Báo tiết dạy và ghép nối giáo án với từng tiết dạy."
            }
            contentSubmit={"Quản lý thời gian"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
