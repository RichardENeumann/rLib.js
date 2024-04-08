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

const btGalleryLeft = document.getElementById("btGalleryLeft");
btGalleryLeft.addEventListener("click", () => {
  rLib.galleryShift(-1);
});

const btGalleryRight = document.getElementById("btGalleryRight");
btGalleryRight.addEventListener("click", () => {
  rLib.galleryShift(1);
});
