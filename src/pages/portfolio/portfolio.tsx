import React, { useEffect, useState } from "react";
import { WebsiteContent } from "../../models/WebsiteContent";
import "./portfolio.scss";
import uniqeID from "../../helpers/UniqeID";
import FilterSection from "./items/FilterSection";

function Portfolio(props: { data: WebsiteContent }) {
  const [filter, setFilter] = useState<string[]>([]);
  const [projectAmount, setProjectAmount] = useState<number>(0);
  const [projectAmountShow, setProjectAmountShow] = useState<number>(0);
  useEffect(() => {
    const projectContainer = document.querySelector(".portfolio__boxes");
    if (projectContainer) {
      let tempAmount = projectContainer.children.length;
      setProjectAmount(tempAmount);
    }
    if (projectAmount !== projectAmountShow) {
      console.log(projectAmount + " " + projectAmountShow);
      if (projectAmount > projectAmountShow) {
        setProjectAmountShow(projectAmountShow + 1);
      } else {
        setProjectAmountShow(projectAmountShow - 1);
      }
    }
  }, [filter, projectAmountShow, projectAmount]);
  return (
    <div className="content__container">
      <section className="portfolio__filter">
        <FilterSection setFilter={setFilter} data={props.data} />
      </section>
      <section className="portfolio__boxes">
        {props.data.portfolioText
          .filter((portfolioProject) => {
            if (filter.length === 0) {
              return true;
            } else {
              return filter.every((tech) => {
                return portfolioProject.tech.includes(tech);
              });
            }
          })
          .sort((a, b) => {
            return b.num - a.num;
          })
          .map((portfolioProject) => {
            return (
              <div
                className="portfolio__box"
                key={portfolioProject.name}
                data-aos="flip-up"
                data-aos-anchor-placement="center-bottom"
              >
                {portfolioProject.photo.length > 1 ? (
                  <img
                    src={portfolioProject.photo}
                    alt="Project print-screen"
                    className="box__img"
                  />
                ) : (
                  <div className="box__img--empty">
                    <img
                      src={require("../../assets/techIcon/image.png")}
                      alt="No photo icon"
                    />
                  </div>
                )}
                <div className="box__desc">
                  <h3>{portfolioProject.name}</h3>
                  <div className="desc__content">
                    {portfolioProject.tech.map((tech) => {
                      return <span key={uniqeID()}>{tech}</span>;
                    })}
                  </div>
                  <div className="box__anchors">
                    <a href={portfolioProject.github} target="_blank">
                      <img
                        src={require("../../assets/techIcon/github.png")}
                        alt="Github icon"
                      />
                    </a>
                    {portfolioProject.live.length > 1 ? (
                      <a href={portfolioProject.live} target="_blank">
                        <img
                          src={require("../../assets/techIcon/file.png")}
                          alt="Demo view icon"
                        />
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </section>
      <section className="portfolio__counter">
        {projectAmount === 0 ? (
          props.data.common.noProject
        ) : (
          <>
            <h5>{props.data.common.projectAmount}</h5>{" "}
            <span> {projectAmountShow}</span>
          </>
        )}
      </section>
    </div>
  );
}

export default Portfolio;
