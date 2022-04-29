import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { setUserLanguage } from "../../reducers/userLanguage";
import { useDispatch } from "react-redux";
import "./Navigation.scss";
import { linkOnClick } from "./helpers/linkOnClick";
import { menuOnClick } from "./helpers/menuOnClick";

function Navigation({ pageText, userLang }: any) {
  const enum userLanguage {
    "PL" = 1,
    "ENG" = 0,
  }

  const dispatch = useDispatch();
  let navigate = useNavigate();

  function buttonOnClick() {
    if (userLang === 0) {
      dispatch(setUserLanguage(userLanguage.PL));
      localStorage.setItem("userLanguage", "1");
    } else {
      dispatch(setUserLanguage(userLanguage.ENG));
      localStorage.setItem("userLanguage", "0");
    }
  }

  return (
    <header className="app__header">
      <div id="menu">
        <div
          id="menu-bar"
          onClick={() => {
            menuOnClick();
          }}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav id="nav" className="nav">
          <ul className="header__list">
            {pageText[userLang].nav.map((item: any, index: number) => {
              let tempClassName = "item__link";
              if (index === 0) {
                tempClassName = "item__link item__link--active";
              }
              return (
                <li className="list__item" key={item.name}>
                  <div
                    // to={item.page}
                    className={tempClassName}
                    onClick={(e) => {
                      linkOnClick(e, navigate, item.page);
                    }}
                  >
                    {item.name}
                  </div>
                  <span className="item__separator"> / </span>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="menu-bg" id="menu-bg"></div>
      </div>

      <button
        className="header__btn--right"
        onClick={() => {
          buttonOnClick();
        }}
      >
        {userLang === 1 ? (
          <img
            src={require("../../assets/flags/engFlag.png")}
            alt="England flag icon"
          />
        ) : (
          <img
            src={require("../../assets/flags/polFlag.png")}
            alt="Poland flag icon"
          />
        )}
      </button>
    </header>
  );
}

export default Navigation;
