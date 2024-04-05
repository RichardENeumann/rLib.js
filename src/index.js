import "./gallery.css";

import rLib from "./richLib.js";

/* rLib.htmlIncludeAll();

const btMenu1 = document.getElementById("btMenu1");
const divMenu1 = document.getElementById("menu1");

btMenu1.addEventListener("click", () => {
  rLib.showDropdownMenu(divMenu1);
});
*/

let index = 0;
const numberofimages = 32;
rLib.loadImagesFromFolder();

const btLeft = document.getElementById("btLeft");
btLeft.addEventListener("click", () => {
  if (index === 0) {
    index = numberofimages;
  } else {
    index -= 1;
  }
  rLib.showImage(index);
});

const btRight = document.getElementById("btRight");
btRight.addEventListener("click", () => {
  if (index === 32) {
    index = 0;
  } else {
    index += 1;
  }
  rLib.showImage(index);
});
