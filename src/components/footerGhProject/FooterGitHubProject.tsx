import React from "react";
import "./FooterGitHubProject.scss";

export class FooterGitHubProject extends React.Component {
  render() {
    return (
      <footer className="app__footer">
        <a target="_blank" href="https://github.com/andro2ss" rel="noreferrer">
          <img
            src={require("../../assets/icons/github.png")}
            alt="Github Icon"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/adrian-brzeski/"
          rel="noreferrer"
        >
          <img
            src={require("../../assets/icons/linkedin.png")}
            alt="Linkedin Icon"
          />
        </a>
      </footer>
    );
  }
}
