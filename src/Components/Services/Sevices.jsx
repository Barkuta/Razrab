import React, { useEffect } from "react";
import s from "./Services.module.css";

const Services = () => {
  useEffect(() => {
    let amination = () => {
      let scrollTop = window.scrollY;
      let child1 = document.getElementById("child1");
      let child2 = document.getElementById("child2");
      let child3 = document.getElementById("child3");
      let child4 = document.getElementById("child4");
      let child5 = document.getElementById("child5");
      let child6 = document.getElementById("child6");
      let child7 = document.getElementById("child7");
      let child8 = document.getElementById("child8");
      let child9 = document.getElementById("child9");
      let child10 = document.getElementById("child10");
      let child11 = document.getElementById("child11");
      let child12 = document.getElementById("child12");
      let child13 = document.getElementById("child13");
      let child14 = document.getElementById("child14");
      let child15 = document.getElementById("child15");
      let child16 = document.getElementById("child16");
      let child17 = document.getElementById("child17");

      let stages = document.getElementById("elem");
      let stagesCenter = Math.floor(stages.offsetHeight / 5);
      console.log(stagesCenter);
      return scrollTop >= stagesCenter
        ? ((stages.style.backgroundColor = "black"),
          (stages.style.transition = "2s"),
          (child1.style.transition = "2s"),
          (child2.style.transition = "2s"),
          (child3.style.transition = "2s"),
          (child4.style.transition = "2s"),
          (child5.style.transition = "2s"),
          (child6.style.transition = "2s"),
          (child7.style.transition = "2s"),
          (child8.style.transition = "2s"),
          (child9.style.transition = "2s"),
          (child10.style.transition = "2s"),
          (child11.style.transition = "2s"),
          (child12.style.transition = "2s"),
          (child13.style.transition = "2s"),
          (child14.style.transition = "2s"),
          (child15.style.transition = "2s"),
          (child16.style.transition = "2s"),
          (child17.style.transition = "2s"),
          (child1.style.color = "white"),
          (child2.style.color = "white"),
          (child3.style.color = "white"),
          (child4.style.color = "white"),
          (child5.style.color = "white"),
          (child6.style.color = "white"),
          (child7.style.color = "white"),
          (child8.style.color = "white"),
          (child9.style.color = "white"),
          (child10.style.color = "white"),
          (child11.style.color = "white"),
          (child12.style.color = "white"),
          (child13.style.color = "white"),
          (child14.style.color = "white"),
          (child15.style.color = "white"),
          (child16.style.color = "white"),
          (child17.style.color = "white"))
        : ((stages.style.backgroundColor = "white"),
          (child1.style.color = "black"),
          (child2.style.color = "black"),
          (child3.style.color = "black"),
          (child4.style.color = "black"),
          (child5.style.color = "black"),
          (child6.style.color = "black"),
          (child7.style.color = "black"),
          (child8.style.color = "black"),
          (child9.style.color = "black"),
          (child10.style.color = "black"),
          (child11.style.color = "black"),
          (child12.style.color = "black"),
          (child13.style.color = "black"),
          (child14.style.color = "black"),
          (child15.style.color = "black"),
          (child16.style.color = "black"),
          (child17.style.color = "black"));
    };
    document.addEventListener("scroll", amination, true);
    return () => {
      document.removeEventListener("scroll", amination, true);
    };
  }, []);

  return (
    <div className={s.sevices}>
      <div className={s.mainText}>
        <span>
          We will create a simple, stylish and concise website for an attractive
          presentation of your company and promotion of goods and services.
        </span>
      </div>
      <div className={s.getBlock}>
        <div className={s.getBlockText}>
          <span>What you will get:</span>
        </div>
        <div className={s.items}>
          <span>
            The functionality of the site <br /> corresponding to 2023
          </span>
          <span>Stylish design created specifically for your project</span>
          <span>
            Adaptive layout for convenient site display on mobile devices
          </span>
        </div>
        <div className={s.itemsText}>
          Full readiness of the site for promotion and sales
        </div>
      </div>
      <div id="elem" className={s.stages}>
        <div className={s.stagesText}>
          <span id="child1">Stages of development:</span>
        </div>
        <div className={s.stagesBlock}>
          <div className={s.firstItem}>
            <div className={s.numberOne}>
              <span id="child2">1</span>
            </div>
            <div className={s.textOne}>
              <span id="child3">
                Study of the task, preparation of technical specifications and
                project estimates
              </span>
            </div>
          </div>
          <div className={s.border}></div>
          <div className={s.firstItem}>
            <div className={s.numberOne}>
              <span id="child4">2</span>
            </div>
            <div className={s.textTwo}>
              <span id="child5" className={s.textTwo1}>
                Development of the design concept
              </span>
              <span className={s.textTwo2}>
                According to your corporate identity.
              </span>
            </div>
          </div>
          <div className={s.border}></div>
          <div className={s.firstItem}>
            <div className={s.numberOne}>
              <span id="child6">3</span>
            </div>
            <div className={s.textOne}>
              <span id="child7">Adaptive layout</span>
            </div>
          </div>
          <div className={s.border}></div>
          <div className={s.firstItem}>
            <div className={s.numberOne}>
              <span id="child8">4</span>
            </div>
            <div className={s.textTwo}>
              <span id="child9" className={s.textTwo1}>
                Programming
              </span>
              <span className={s.textTwo2}>
                Creating the internal structure of the site in the management
                system.
              </span>
            </div>
          </div>
          <div className={s.border}></div>
          <div className={s.firstItem}>
            <div className={s.numberOne}>
              <span id="child10">5</span>
            </div>
            <div className={s.textTwo}>
              <span id="child11" className={s.textTwo1}>
                Integration with external systems
              </span>
              <span className={s.textTwo2}>Connecting to a remote server</span>
            </div>
          </div>
          <div className={s.border}></div>
          <div className={s.firstItem}>
            <div className={s.numberOne}>
              <span id="child12">6</span>
            </div>
            <div className={s.textTwo}>
              <span id="child13" className={s.textTwo1}>
                Content filling
              </span>
              <span className={s.textTwo2}>
                Entering information on the site pages.
              </span>
            </div>
          </div>
          <div className={s.border}></div>
          <div className={s.firstItem}>
            <div className={s.numberOne}>
              <span id="child14">7</span>
            </div>
            <div className={s.textTwo}>
              <span id="child15" className={s.textTwo1}>
                Testing
              </span>
              <span className={s.textTwo2}>
                Debugging and checking the site on a test server.
              </span>
            </div>
          </div>
          <div className={s.border}></div>
          <div className={s.firstItem}>
            <div className={s.numberOne}>
              <span id="child16">8</span>
            </div>
            <div className={s.textTwo}>
              <span id="child17" className={s.textTwo1}>
                Website publication
              </span>
              <span className={s.textTwo2}>
                Launching a website on your hosting or server
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
