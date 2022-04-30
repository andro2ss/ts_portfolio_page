import React from "react";
import { WebsiteContent } from "../../models/WebsiteContent";
import "./Contact.scss";

function Contact(props: { data: WebsiteContent }) {
  const tel = "tel:" + props.data.conText.phone;
  const email = "mailto:" + props.data.conText.email;
  return (
    <div className="content__container">
      <div className="contact__box">
        <h3> {props.data.conText.title}</h3>
        <div className="box__items">
          <div className="item">
            <h4> {props.data.conText.phoneText}</h4>
            <a href={tel}>
              <img
                src={require("../../assets/icons/telephone-call.png")}
                alt="Phone icon"
              />
              <span>{props.data.conText.phone}</span>
            </a>
          </div>
          <div className="item">
            <h4> {props.data.conText.emailText}</h4>
            <a href={email}>
              <img
                src={require("../../assets/icons/email.png")}
                alt="Email icon"
              />
              <span>{props.data.conText.email}</span>
            </a>
          </div>
        </div>
        <div className="item">
          <h4> {props.data.conText.cvText}</h4>
          <a href={props.data.conText.cv} target="_blank" rel="noreferrer">
            <img src={require("../../assets/icons/cv.png")} alt="CV icon" />
            <span>{props.data.conText.cvName}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
