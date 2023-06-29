import React, { useEffect } from "react";
import s from "./Content.module.css";
import item from "../Assets/skrin1.png";
import item2 from "../Assets/Desktop.png";

const Content = () => {
  useEffect(() => {
    console.log("ComponentDidMount");
  }, []);
  return (
    <content className={s.content}>
      {/* <nav className={s.nav}>
        <a href="/services">Services</a>
        <a href="/info">Info</a>
        <a href="/reviews">Reviews</a>
      </nav> */}
      <firstBlock className={s.firstBlock}>
        <div className={s.textWrapper}>
          <div className={s.text1}>
            <p>We will make your </p>
          </div>
          <div className={s.text2}>
            <p>BUSINESS</p>
          </div>
          <div className={s.text3}>
            <p>BIGGER</p>
          </div>
        </div>
      </firstBlock>
      <secondBlock className={s.secondBlock}>
        <div className={s.ourWork}>
          <p>Our work</p>
        </div>
        <sections className={s.sections}>
          <div className={s.box1}>
            <img src={item} alt="" />
          </div>
          <div className={s.box2}>
            <img src={item2} alt="" />
          </div>
        </sections>
      </secondBlock>
    </content>
  );
};

export default Content;
