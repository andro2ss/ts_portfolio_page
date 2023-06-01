import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Filters, IFilters } from "./Filters";

export interface FilterSectionInterface extends IFilters {
  filterAmount: number;
}

export const FilterSection = ({
  setFilter,
  data,
  filterAmount,
}: FilterSectionInterface) => {
  return (
    <Accordion className="filter__container">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="customColor" />}
        aria-controls="project filters tags"
      >
        <h3>
          {data.common.filters}
          {filterAmount > 0 ? `(${filterAmount})` : ""}
        </h3>
      </AccordionSummary>
      <AccordionDetails className="filter__content">
        <div className="filter__boxes">
          <Filters setFilter={setFilter} data={data} />
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
