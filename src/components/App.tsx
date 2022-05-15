import React, { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { setUserLanguage, userLang } from "../reducers/userLanguage";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase";
import { pageTextInterface, setPageText } from "../reducers/pageText";
import CatLoader from "./common/loaders/cat/CatLoader";
import Start from "../pages/start/Start";
import Portfolio from "../pages/portfolio";
import Skills from "../pages/Skills";
import AboutMe from "../pages/aboutMe/AboutMe";
import Contact from "../pages/contact/contact";
import { FooterGitHubProject } from "./footerGhProject/FooterGitHubProject";
import Navigation from "./nav/Navigation";
import { WebsiteContent } from "../models/WebsiteContent";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const dispatch = useDispatch();
  const userLang = useSelector((state: userLang) => state.userLanguage);
  const pageText: WebsiteContent[] = useSelector(
    (state: pageTextInterface) => state.pageText
  );

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
                <Route path="/" element={<Start data={pageText[userLang]} />} />
                ;
                <Route
                  path="/aboutMe"
                  element={<AboutMe data={pageText[userLang]} />}
                />
                ;
                <Route
                  path="/skills"
                  element={<Skills data={pageText[userLang]} />}
                />
                ;
                <Route
                  path="/portfolio"
                  element={<Portfolio data={pageText[userLang]} />}
                />
                ;
                <Route
                  path="/contact"
                  element={<Contact data={pageText[userLang]} />}
                />
                ;
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
