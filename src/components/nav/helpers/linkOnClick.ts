export function linkOnClick(e: any, nav: any, url: string) {
  console.log(window.location.pathname);
  document.getElementById("menu-bar")?.classList.remove("change");
  document.getElementById("nav")?.classList.remove("change");
  document.getElementById("menu-bg")?.classList.remove("change-bg");
  document
    .querySelector(".item__link--active")
    ?.classList.remove("item__link--active");
  const tempElement = e.target as Element;
  tempElement.classList.add("item__link--active");

  const animated = document.querySelector(".content__container");
  animated?.classList.add("animation--exit");

  animated?.addEventListener("animationend", () => {
    console.log("Animation ended");
    animated?.classList.add("hide");
    nav(url, { replace: true });
  });
}
