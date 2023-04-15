// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));

import "./styles/style.css";
import { base, list, frameworks, libs } from "./data/hbsData.js";
import first_task from "./template/first_task.hbs";
import second_task from "./template/second_task.hbs";
import thirth_task from "./template/thirth_task.hbs";
import four_tasks from "./template/four_task.hbs";

const root = document.querySelector("#root");

const first = first_task(base);
root.insertAdjacentHTML(first);

const markup = second_task(list);
root.insertAdjacentHTML("beforeend", markup);

const thirth = thirth_task(frameworks);
root.insertAdjacentHTML("beforeend", thirth);

const four = four_tasks(libs);
root.insertAdjacentHTML(four);
