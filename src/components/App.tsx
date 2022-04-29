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
import Navigation from "./nav/Navigation";

function App() {
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
            <Navigation pageText={pageText} userLang={userLang} />
            <main className="app__content">
              <Routes>
                <Route path="/" element={<Start />} />;
                <Route path="/aboutMe" element={<AboutMe />} />;
                <Route path="/cv" element={<Cv />} />;
                <Route path="/portfolio" element={<Portfolio />} />;
                <Route path="/contact" element={<Contact />} />;
              </Routes>
            </main>
          </BrowserRouter>
          <FooterGitHubProject />
        </>
      )}
    </div>
  );
}

export default App;
