import React, { useEffect, useState } from "react";
import { WebsiteContent } from "../../models/WebsiteContent";
import "./portfolio.scss";
import uniqeID from "../../helpers/UniqeID";
import FilterSection from "./items/FilterSection";

function Portfolio(props: { data: WebsiteContent }) {
  const [filter, setFilter] = useState<string[]>([]);
  useEffect(() => {}, [filter]);

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
              <div className="portfolio__box" key={portfolioProject.name}>
                <img src={portfolioProject.photo} alt="" className="box__img" />
                <div className="box__desc">
                  <h3>{portfolioProject.name}</h3>
                  <h4>
                    {portfolioProject.tech.map((tech) => {
                      return <span key={uniqeID()}>{tech}</span>;
                    })}
                  </h4>
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
    </div>
  );
}

export default Portfolio;
