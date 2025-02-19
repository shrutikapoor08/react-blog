import React from "react";
import ReactDOM from "react-dom";
import ExpertiseContainer from "./Expertise";
import "./index.css";

const EXPERTISE = [
  {
    category: ["AngularJS", "JavaScript"],
    image:
      "http://www.indianappdevelopers.com/blog/wp-content/uploads/2016/04/AngularJS.png",
    title: "TELUS Optik TV",
    description:
      "The front-end is developed in AngularJS. Worked as a Front-end developer to craft the existing shopping experience. ",
  },
  {
    category: ["PHP"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png",
    title: "TeamFit Mobile App",
    description: "I developed the back-end in PHP.",
  },
  {
    category: ["ReactJS", "JavaScript"],
    image:
      "http://daynin.github.io/clojurescript-presentation/img/react-logo.png",
    title: "Portfolio site",
    description: "Developed in ReactJS.",
  },
];

ReactDOM.render(
  <ExpertiseContainer expertise={EXPERTISE} />,
  document.getElementById("portfolio")
);
