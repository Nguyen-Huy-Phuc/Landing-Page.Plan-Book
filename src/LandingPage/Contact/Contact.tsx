import emailjs from "@emailjs/browser";
import React, { FormEvent, useContext, useRef, useState } from "react";
import { themeContext } from "../../Context";
import "./Contact.css";

const Contact: React.FC = () => {
  const theme: any = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef<HTMLFormElement>(null);
  const [done, setDone] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_2mu5xtl",
          "template_m5udu2c",
          form.current,
          "VLwg1ltOWvnCYAiK_"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Hãy để lại</span>
          <span>Thông tin cá nhân</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Họ tên"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <input
            type="Number"
            name="user_phone"
            className="user"
            placeholder="Số điện thoại"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Lời muốn nói"
          />
          <input type="submit" value="Gửi" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
