import "./main.css";

import rLib from "./richLib.js";

rLib.htmlIncludeAll();

const btMenu1 = document.getElementById("btMenu1");
const divMenu1 = document.getElementById("menu1");

btMenu1.addEventListener("click", () => {
  rLib.showDropdownMenu(divMenu1);
});
