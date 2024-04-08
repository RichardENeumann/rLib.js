import "./gallery.css";

import rLib from "./rLib.js";

/*
const btMenu1 = document.getElementById("btMenu1");
const divMenu1 = document.getElementById("menu1");

btMenu1.addEventListener("click", () => {
  rLib.showDropdownMenu(divMenu1);
});
*/

rLib.htmlIncludeAll();
rLib.galleryLoad();

const btLeft = document.getElementById("btGalleryLeft");
btLeft.addEventListener("click", () => {
  rLib.galleryShift(-1);
});

const btRight = document.getElementById("btGalleryRight");
btRight.addEventListener("click", () => {
  rLib.galleryShift(1);
});
