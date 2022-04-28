import React from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { setUserLanguage, userLang } from "../reducers/userLanguage";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";
import { pageTextInterface, setPageText } from "../reducers/pageText";
import CatLoader from "./common/loaders/cat/CatLoader";
import Start from "../pages/Start";
import Portfolio from "../pages/portfolio";
import Cv from "../pages/Cv";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/contact";
import { FooterGitHubProject } from "./footerGhProject/FooterGitHubProject";

function App() {
  const enum userLanguage {
    "PL" = 1,
    "ENG" = 0,
  }

  const dispatch = useDispatch();
  const userLang = useSelector((state: userLang) => state.userLanguage);
  const pageText = useSelector((state: pageTextInterface) => state.pageText);

  if (pageText.length === 0) {
    onSnapshot(collection(db, `pageContent`), (snapshot: any) => {
      dispatch(
        setPageText(
          snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
        )
      );
    });

    if (userLang === 99 && localStorage["userLanguage"]) {
      const local = localStorage.getItem("userLanguage");
      dispatch(setUserLanguage(Number(local)));
    } else {
      localStorage.setItem("userLanguage", "1");
    }
  }

  return (
    <div className="app">
      {pageText.length === 0 ? (
        <div id="buildingPage">
          <CatLoader />
          <br />
          Ładuję stronę
        </div>
      ) : (
        <>
          <BrowserRouter>
            <header className="app__header">
              <ul className="header__list">
                {pageText[userLang].nav.map((item: any, index: number) => {
                  let separator = " / ";
                  let tempClassName = "item__link";
                  if (index === 0) {
                    tempClassName = "item__link item__link--active";
                  }
                  if (index === pageText[userLang].nav.length - 1) {
                    separator = "";
                  }
                  return (
                    <li className="list__item" key={item.name}>
                      <Link
                        to={item.page}
                        className={tempClassName}
                        onClick={(e) => {
                          document
                            .querySelector(".item__link--active")
                            ?.classList.remove("item__link--active");
                          const tempElement = e.target as Element;
                          tempElement.classList.add("item__link--active");
                        }}
                      >
                        {item.name}
                      </Link>
                      <span className="item__separator">{separator}</span>
                    </li>
                  );
                })}
              </ul>
              <button
                className="header__btn--right"
                onClick={() => {
                  if (userLang === 0) {
                    dispatch(setUserLanguage(userLanguage.PL));
                    localStorage.setItem("userLanguage", "1");
                  } else {
                    dispatch(setUserLanguage(userLanguage.ENG));
                    localStorage.setItem("userLanguage", "0");
                  }
                }}
              >
                {userLang === 1 ? (
                  <img src={require("../assets/flags/engFlag.png")} alt="" />
                ) : (
                  <img src={require("../assets/flags/polFlag.png")} alt="" />
                )}
              </button>
            </header>
            <main className="app__content">
              <div className="content__container">
                <Routes>
                  <Route path="/" element={<Start />} />;
                  <Route path="/aboutMe" element={<AboutMe />} />;
                  <Route path="/cv" element={<Cv />} />;
                  <Route path="/portfolio" element={<Portfolio />} />;
                  <Route path="/contact" element={<Contact />} />;
                </Routes>
              </div>
            </main>
          </BrowserRouter>
          <FooterGitHubProject />
        </>
      )}
    </div>
  );
}

export default App;
