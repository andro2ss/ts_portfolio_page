import React, { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { setUserLanguage, userLang } from "../reducers/userLanguage";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { pageTextInterface, setPageText } from "../reducers/pageText";
import CatLoader from "./common/loaders/cat/CatLoader";
import Start from "../pages/start/Start";
import Portfolio from "../pages/portfolio/portfolio";
import Skills from "../pages/skills/Skills";
import AboutMe from "../pages/aboutMe/AboutMe";
import Contact from "../pages/contact/contact";
import { FooterGitHubProject } from "./footerGhProject/FooterGitHubProject";
import Navigation from "./nav/Navigation";
import { WebsiteContent } from "../models/WebsiteContent";
import AOS from "aos";
import "aos/dist/aos.css";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firebaseConfig";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
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

    if (!localStorage["userLanguage"]) {
      localStorage.setItem("userLanguage", "1");
    }

    if (userLang === 99) {
      const local = localStorage.getItem("userLanguage");
      dispatch(setUserLanguage(Number(local)));
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
