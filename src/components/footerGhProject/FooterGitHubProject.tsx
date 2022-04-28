import React from "react";
import "./FooterGitHubProject.scss";

export class FooterGitHubProject extends React.Component {
  render() {
    return (
      <footer className="app__footer">
        <a
          target="_blank"
          href="https://github.com/andro2ss/ts_portfolio_page"
          rel="noreferrer"
        >
          <img
            src={require("../../assets/icons/github.png")}
            alt="Github Icon"
          />
          A.Brzeski
        </a>
      </footer>
    );
  }
}
