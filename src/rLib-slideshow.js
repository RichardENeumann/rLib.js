export function loadImagesFromFolder() {
  const imgContainer = document.getElementById("imgContainer");

  for (let i = 1; i < 34; i++) {
    const figure = document.createElement("figure");
    figure.classList.add("slides");

    const img = document.createElement("img");
    const src = `./images/img${i.toString().padStart(2, "0")}.jpg`;
    img.src = src;
    figure.appendChild(img);

    const figcaption = document.createElement("figcaption");
    figcaption.innerHTML = `Bild ${i.toString().padStart(2, "0")}`;
    figure.appendChild(figcaption);
    
    imgContainer.appendChild(figure);
  }
  const images = document.getElementsByClassName("slides");
  Array.from(images).forEach(el => {
    const elHelper = el;
    elHelper.style.display = "none";
  });
  images[0].style.display = "block";
}

export function showImage(index) {
  const images = document.getElementsByClassName("slides");

  Array.from(images).forEach(el => {
    const elHelper = el;
    elHelper.style.display = "none";
  });
  images[index].style.display = "block";
}
