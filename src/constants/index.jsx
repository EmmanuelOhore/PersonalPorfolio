import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import vite from "../assets/vite.png";
import tailwind from "../assets/tailwind.png";
import superbase from "../assets/superbase.png";
import bootstrap from "../assets/bootstrap.png";
import git from "../assets/git.png";
import vercel from "../assets/vercel.png";
// export porfoltio tech stack
export const techStack = [
  {
    icons: html,
    Language: "html",
  },
  {
    icons: css,
    Language: "css",
  },
  {
    icons: js,
    Language: "js",
  },
  {
    icons: react,
    Language: "react",
  },
  {
    icons: vite,
    Language: "vite",
  },
  {
    icons: tailwind,
    Language: "tailwind",
  },
  {
    icons: superbase,
    Language: "superbase",
  },
  {
    icons: git,
    Language: "git",
  },
  {
    icons: bootstrap,
    Language: "bootstrap",
  },
  {
    icons: vercel,
    Language: "vercel",
  },
];

export const ScrollToSetion = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};

// nav data export
export const navData = [
  {
    id: 1,
    name: "Home",
    section: "home",
  },
  {
    id: 2,
    name: "About",
    section: "about",
  },
  {
    id: 3,
    name: "Portfolio",
    section: "portfolio",
  },
  {
    id: 4,
    name: "Contact",
    section: "contact",
  },
];
