import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic4 from "../img/z4977798672063_fd09055c0a0a31cecd04cd502cb7241b.jpg";
import profilePic3 from "../img/z5329092497533_a1d440f60f1491fce435a297736577e8.jpg";
import profilePic2 from "../img/z5612197885633_bcbb0f81e8ed9942b915cec9e96942a4.jpg";
import profilePic1 from "../img/z5641569798674_3eaf841b00b9bc4269c0135b14450096.jpg";
import "./Testimonial.css";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Tôi thấy đây là 1 nền tảng rất tốt để có thể tìm kím nguồn đề để dạy học rất là uy tín",
    },
    {
      img: profilePic2,
      review:
        "Nền tảng cung cấp 1 môi trường rất tốt để có thể quản lý lịch giảng dạy",
    },
    {
      img: profilePic3,
      review:
        "Tôi thấy nên tảng cung cấp 1 nơi tốt để có thể soạn giáo phù hợp với mình bằng sự trợ giúp của AI và các giáo viên khác",
    },
    {
      img: profilePic4,
      review:
        "Tôi thấy đây là nền tảng rất tốt để lưu trữ chuẩn kiến thức và yêu cầu kỹ năng cần đạt cho mỗi bài học",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Tổng hợp những </span>
        <span>BLOG </span>
        <span>tiêu biểu và nổi bật của các giáo viên</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
