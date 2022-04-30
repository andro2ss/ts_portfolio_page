import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Start.scss";
import { WebsiteContent } from "../../models/WebsiteContent";

function Start(props: { data: WebsiteContent }) {
  const el: any = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: props.data.startText.authorDesc,
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 500,
      loop: true,
      showCursor: true,
      autoInsertCss: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="content__container">
      <div className="startPage__box">
        <div className="box__image">
          <img src={props.data.photos.author} alt="Author selfie" />
        </div>
        <div className="box__text">
          <h2>
            {props.data.startText.headerTxt}{" "}
            <span>{props.data.startText.headerAuthor}</span>
          </h2>
          <h3>
            <span ref={el}></span>
          </h3>
          <span>{props.data.startText.motto}</span>
        </div>
      </div>
    </div>
  );
}

export default Start;
