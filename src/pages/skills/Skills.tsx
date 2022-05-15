import React from "react";
import "./Skills.scss";
import { WebsiteContent } from "../../models/WebsiteContent";
import uniId from "../../helpers/UniqeID";
import Rating from "@mui/material/Rating";

function Skills(props: { data: WebsiteContent }) {
  return (
    <div className="content__container">
      <ul
        className="skills__box skills__box--center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <span className="box__title">
          <img
            src={require("../../assets/icons/programming.png")}
            alt="Programming Icon"
          />
        </span>
        {props.data.skillsText.langProg.map((item) => {
          return (
            <li key={uniId()} className="box__item">
              {item}
            </li>
          );
        })}
      </ul>
      <ul
        className="skills__box skills__box--right"
        data-aos="fade-left"
        data-aos-anchor-placement="center-bottom"
      >
        <span className="box__title">
          <img
            src={require("../../assets/icons/framework.png")}
            alt="Frameworks Icon"
          />
        </span>
        {props.data.skillsText.frame.map((item) => {
          return (
            <li key={uniId()} className="box__item">
              {item}
            </li>
          );
        })}
      </ul>
      <ul
        className="skills__box skills__box--center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <span className="box__title">
          {" "}
          <img src={require("../../assets/icons/ide.png")} alt="IDE Icon" />
        </span>

        {props.data.skillsText.ide.map((item) => {
          return (
            <li key={uniId()} className="box__item">
              {item}
            </li>
          );
        })}
      </ul>
      <ul
        className="skills__box skills__box--left"
        data-aos="fade-right"
        data-aos-anchor-placement="center-bottom"
      >
        <span className="box__title">
          {" "}
          <img
            src={require("../../assets/icons/operative-system.png")}
            alt="Operation System Icon"
          />
        </span>
        {props.data.skillsText.sys.map((item) => {
          return (
            <li key={uniId()} className="box__item">
              {item}
            </li>
          );
        })}
      </ul>
      <ul
        className="skills__box skills__box--center"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <span className="box__title">
          <img src={require("../../assets/icons/file.png")} alt="Other Icon" />
        </span>
        {props.data.skillsText.other.map((item) => {
          return (
            <li key={uniId()} className="box__item">
              {item}
            </li>
          );
        })}
      </ul>
      <ul
        className="skills__box skills__box--right"
        data-aos="fade-left"
        data-aos-anchor-placement="center-bottom"
      >
        <span className="box__title">
          <img
            src={require("../../assets/icons/languages.png")}
            alt="Languages Icon"
          />
        </span>
        {props.data.skillsText.lang
          .sort((a, b) => {
            return b.lvl - a.lvl;
          })
          .map((items) => {
            return (
              <li key={uniId()} className="box__item">
                {items.name}{" "}
                <Rating
                  name="read-only"
                  value={items.lvl}
                  readOnly
                  size="small"
                  max={6}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Skills;
