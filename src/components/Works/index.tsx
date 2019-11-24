import React, { FC } from "react";
import Title from "../../components/Title";
import Work, { WorkItems } from "./Work";

const Works: FC = () => {
  const workItems: WorkItems[] = [
    {
      title: "cidermitaina TEA",
      link: "https://cidermitaina.github.io/tea",
      icon: "mug-hot",
      description:
        "This page is a collection of my favorite teas and Japanese teas.",
      skils: "React / TypeScript / styled-components"
    },
    {
      title: "the-super-tiny-compiler",
      link: "https://cidermitaina.github.io/the-super-tiny-compiler/",
      icon: "file-code",
      description:
        " It’s going to compile some lisp- like function calls into some C-like function calls.",
      skils: "HTML / CSS / JavaScript"
    },
    {
      title: "2018xmas",
      link: "https://cidermitaina.github.io/xmas2018/",
      icon: "xmas",
      description:
        "At Yoshida’s house on December 15. This html is an invitation card for xmas party",
      skils: "HTML / CSS / SCSS / JavaScript / Nuxt.js"
    },
    {
      title: "Happy Birthday",
      link: "https://cidermitaina.github.io/yukari_birthday/",
      icon: "cake",
      description:
        "Happy Birthday, It is my birthday present from me. May 29, 2018",
      skils: "HTML / CSS / Sass / SCSS / JavaScript / jQuery / gulp /"
    },
    {
      title: "SPA",
      link: "https://cidermitaina.github.io/spa-page/#/",
      icon: "file",
      description: "SPApage, Fictitious SPA site using Vue.js",
      skils: "Vue.js / JavaScript / bulma /"
    },
    {
      title: "Chat",
      link: "https://aqueous-savannah-33502.herokuapp.com/",
      icon: "balloon",
      description: "Chat, Chat application made with Node.js",
      skils: "Node.js / Socket.io / ejs / JavaScript / jQuery / sass /"
    },
    {
      title: "2017xmas",
      link: "https://cidermitaina.github.io/2017xmas/public/",
      icon: "xmas",
      description:
        "2017 xmas party, At Yoshida’s house on December 23.This html is an invitation card for xmas party",
      skils: "HTML / PostCSS / JavaScript / jQuery / canvas / npm-scripts /"
    }
  ];

  return (
    <>
      <Title title="Works" id="#works" />
      <Work workItems={workItems} />
    </>
  );
};

export default Works;
