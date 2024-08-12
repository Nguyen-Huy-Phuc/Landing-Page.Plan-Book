import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme: any = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="experience">
      <div className="achievement">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          10+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Năm</span>
        <span>Số năm thành lập</span>
      </div>
      <div className="achievement">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          8k+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Đề</span>
        <span>Số đề thi</span>
      </div>
      <div className="achievement">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          1k+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Bài</span>
        <span>Số blog</span>
      </div>

      <div className="achievement">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          10k+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Đề</span>
        <span>Số tài liệu</span>
      </div>
      <div className="achievement">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          7tr+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>người</span>
        <span>Số học sinh</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          800+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Người</span>
        <span>Số giáo viên</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          99.9+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>%</span>
        <span>Tỉ lệ chính xác</span>
      </div>
    </div>
  );
};

export default Experience;
