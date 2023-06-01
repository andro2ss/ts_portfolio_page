import { useEffect, useState } from "react";

export const usePortfolio = () => {
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
      if (projectAmount > projectAmountShow) {
        setProjectAmountShow(projectAmountShow + 1);
      } else {
        setProjectAmountShow(projectAmountShow - 1);
      }
    }
  }, [filter, projectAmountShow, projectAmount]);

  return { setFilter, projectAmount, filter, projectAmountShow };
};
