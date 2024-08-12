import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../img/sidebar.png";
import Ecommerce from "../img/ecommerce.png";
import HOC from "../img/hoc.png";
import MusicApp from "../img/musicapp.png";
import { themeContext } from "../../Context";

const Portfolio: React.FC = () => {
  const theme: any = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Môn học & lớp học</span>
      <span>Nổi bật</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img
            style={{ minWidth: "85%" }}
            src={Sidebar}
            alt="Sidebar Project"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ minWidth: "85%" }}
            src={Ecommerce}
            alt="Ecommerce Project"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ minWidth: "85%" }}
            src={MusicApp}
            alt="Music App Project"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ minWidth: "85%" }} src={HOC} alt="HOC Project" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
