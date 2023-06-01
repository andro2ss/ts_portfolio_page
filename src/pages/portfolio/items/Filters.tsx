import React, { Dispatch, SetStateAction, useCallback } from "react";
import { WebsiteContent } from "../../../models/WebsiteContent";
export interface IFilters {
  setFilter: Dispatch<SetStateAction<string[]>>;
  data: WebsiteContent;
}
export const Filters = ({ setFilter, data }: IFilters) => {
  const handleSelectTech = useCallback(
    (e: React.MouseEvent) => {
      e.currentTarget.classList.toggle("selected");
      let selectedOptions = document.querySelectorAll(".selected");
      const tempArray: string[] = [];
      selectedOptions.forEach((item) => {
        tempArray.push(item.innerHTML);
      });
      setFilter(tempArray);
    },
    [setFilter]
  );

  return (
    <>
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
            <span key={tech} onClick={handleSelectTech}>
              {tech}
            </span>
          );
        })}
    </>
  );
};
