import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { WebsiteContent } from "../../../models/WebsiteContent";

interface FilterSectionInterface {
  setFilter: any;
  data: WebsiteContent;
}
function FilterSection({ setFilter, data }: FilterSectionInterface) {
  return (
    <Accordion className="filter__container">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="customColor" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h3>{data.common.filters}</h3>
      </AccordionSummary>
      <AccordionDetails className="filter__content">
        <div className="filter__boxes">
          {data.portfolioText
            .map((portfolioProject) => {
              return portfolioProject.tech.map((tech) => {
                return tech;
              });
            })
            .flat()
            .filter((item, index, self) => {
              return index === self.findIndex((t) => t === item);
            })
            .sort((a, b) => a.localeCompare(b))
            .map((tech) => {
              return (
                <span
                  key={tech}
                  onClick={(e) => {
                    (e.target as Element).classList.toggle("selected");
                  }}
                >
                  {tech}
                </span>
              );
            })}
        </div>
        <Button
          variant="outlined"
          startIcon={<SearchIcon />}
          onClick={() => {
            let selectedOptions = document.querySelectorAll(".selected");
            const tempArray: string[] = [];
            selectedOptions.forEach((item) => {
              tempArray.push(item.innerHTML);
            });
            setFilter(tempArray);
          }}
        >
          {data.common.search}
        </Button>
      </AccordionDetails>
    </Accordion>
  );
}

export default FilterSection;
