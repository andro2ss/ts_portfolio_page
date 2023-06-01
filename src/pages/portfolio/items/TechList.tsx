import React from "react";
import uniqeID from "../../../helpers/UniqeID";
import { PortfolioText } from "../../../models/WebsiteContent";

interface ITechList {
  portfolioText: PortfolioText[];
  filter: string[];
}

export const TechList = ({ portfolioText, filter }: ITechList) => {
  return (
    <>
      {portfolioText
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
              className={"portfolio__box "}
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
                    src={require("../../../assets/techIcon/image.png")}
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
                  <a
                    href={portfolioProject.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require("../../../assets/techIcon/github.png")}
                      alt="Github icon"
                    />
                  </a>
                  {portfolioProject.live.length > 1 ? (
                    <a
                      href={portfolioProject.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={require("../../../assets/techIcon/file.png")}
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
    </>
  );
};
