import React from "react";
import { WebsiteContent } from "../../models/WebsiteContent";
import "./portfolio.scss";
import { FilterSection } from "./items/FilterSection";
import { TechList } from "./items/TechList";
import { usePortfolio } from "./usePortfolio";

function Portfolio(props: { data: WebsiteContent }) {
  const { projectAmountShow, filter, setFilter, projectAmount } =
    usePortfolio();

  return (
    <div className="content__container">
      <section className="portfolio__filter">
        <FilterSection
          setFilter={setFilter}
          data={props.data}
          filterAmount={filter.length}
        />
      </section>
      <section className="portfolio__boxes">
        <TechList portfolioText={props.data.portfolioText} filter={filter} />
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
