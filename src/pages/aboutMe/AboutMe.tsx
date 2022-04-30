import React from "react";
import { WebsiteContent } from "../models/WebsiteContent";

function AboutMe(props: { data: WebsiteContent }) {
  return (
    <div className="content__container">
      <span className="aboutMePage__desc">{props.data.aboutMeText.desc}</span>
    </div>
  );
}

export default AboutMe;
