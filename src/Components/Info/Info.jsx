import React, { useEffect } from "react";
import s from "./Info.module.css";
import css from "../Assets/css certificate-2_page-0001.jpg";
import js from "../Assets/javascript_basic certificate_page-0001.jpg";
import { motion } from "framer-motion";

const Info = () => {
  useEffect(() => {
    let amination = () => {
      let scrollTop = window.scrollY;
      let reactAnim = document.getElementById("elem");
      let reactCenter = Math.floor(reactAnim.offsetHeight / 1.2);
      console.log(reactCenter);
      return scrollTop >= reactCenter
        ? ((reactAnim.style.transition = "2s"), (reactAnim.style.opacity = 1))
        : ((reactAnim.style.opacity = 0), (reactAnim.style.transition = "2s"));
    };
    document.addEventListener("scroll", amination, true);
    return () => {
      document.removeEventListener("scroll", amination, true);
    };
  }, []);

  return (
    <div className={s.content}>
      <div className={s.mainText}>
        <p>
          I am engaged in Frontend development on the
          <span> React </span>
          framework.
        </p>
      </div>
      <div className={s.css}>
        <div className={s.cssBlock1}>
          <span className={s.cssText1}>CSS</span>
        </div>
        <div className={s.cssBlock2}>
          <div className={s.cssBox1}>
            <span>I use Sass, Less, Scss, preprocessors </span>
            <span>I make a solid, responsive, adaptive layout</span>
            <span className={s.box1span}>+ I design websites in Figma</span>
          </div>
          <div className={s.cssBox2}>
            <img src={css} alt="" />
          </div>
        </div>
        <div className={s.cssBlock3}>
          <span className={s.cssText3}>
            This website is designed by me completely*
          </span>
        </div>
      </div>
      <div className={s.js}>
        <div className={s.jsText}>
          <span>JavaScript</span>
        </div>
        <div className={s.jsBlock}>
          <div className={s.jsBox1}>
            <span>Coping with the organization of logic in JS. </span>
            <span>
              I had experience with writing functional solutions for user
              interaction with an application. <br /> I am constantly improving
              my skill on solving solutions in HackerRank.
            </span>
            <span className={s.jsBoxText}>+ I work with Typescript</span>
          </div>
          <div className={s.jsBox2}>
            <img src={js} alt="" />
          </div>
        </div>
      </div>
      <div className={s.react} id="elem">
        <div className={s.reactText}>
          <span className={s.reactText1}>React</span>
          <span>The main framework for my development.</span>
          <span>
            I know the React technical device (Virtual DOM, Babel, jsx
            transpilation)
          </span>
        </div>
        <div className={s.reactBlock}>
          <div className={s.row1}>
            <span>Single Page App</span>
            <span className={s.row1Text}>Redux</span>
            <span>RestAPI</span>
          </div>
          <div className={s.row2}>
            <span>Ajax</span>
            <span>Redux-thunk</span>
            <span>Hook</span>
          </div>
          <div className={s.row3}>
            <span>Application adaptation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
