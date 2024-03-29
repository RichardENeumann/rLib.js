import "./main.css";

import { rLib } from "./richLib.js";

// rLib.htmlIncludeAll();

const btMenu1 = document.getElementById("btMenu1");
const btMenu2 = document.getElementById("btMenu2");
const divMenu1 = document.getElementById("menu1");
const divMenu2 = document.getElementById("menu2");

btMenu1.addEventListener("click", () => {
  rLib.showDropdownMenu(divMenu1);
});

btMenu2.addEventListener("click", () => {
  rLib.showDropdownMenu(divMenu2);
});
