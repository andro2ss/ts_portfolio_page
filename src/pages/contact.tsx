import React from "react";
import { WebsiteContent } from "../models/WebsiteContent";

function Contact(props: { data: WebsiteContent }) {
  const tel = "tel:" + props.data.conText.phone;
  const email = "mailto:" + props.data.conText.email;
  return (
    <div className="content__container">
      <div className="contact__box">
        <h3> {props.data.conText.title}</h3>
        <div>
          <h4> {props.data.conText.phoneText}</h4>
          <a href={tel}>{props.data.conText.phone}</a>
        </div>
        <div>
          <h4> {props.data.conText.emailText}</h4>
          <a href={email}>{props.data.conText.email}</a>
        </div>
        <div>
          <h4> {props.data.conText.cvText}</h4>
          <a href={props.data.conText.cv} target="_blank" rel="noreferrer">
            {props.data.conText.cvName}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
