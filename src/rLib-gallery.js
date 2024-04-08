let index;
const numberOfImages = 33;
const path = "./images/";

export function galleryLoad() {
  const galleryContainer = document.getElementById("galleryContainer");

  for (let i = 1; i < numberOfImages + 1; i += 1) {
    const figure = document.createElement("figure");
    figure.classList.add("gallerySlides");

    const img = document.createElement("img");
    const src = `${path}img${i.toString().padStart(3, "0")}.jpg`;
    img.src = src;
    figure.appendChild(img);

    const figcaption = document.createElement("figcaption");
    figcaption.innerHTML = `Image ${i.toString().padStart(3, "0")}`;
    figure.appendChild(figcaption);

    galleryContainer.appendChild(figure);
  }
  const images = document.getElementsByClassName("gallerySlides");
  [...images].forEach(el => {
    el.style.display = "none";
  });
  images[0].style.display = "block";
  index = 1;
}

export function galleryShift(direction = 1) {
  if (direction === 1) {
    if (index === numberOfImages) {
      index = 1;
    } else {
      index += direction;
    }
  }
  if (direction === -1) {
    if (index === 1) {
      index = numberOfImages;
    } else {
      index += direction;
    }
  }
  const images = document.getElementsByClassName("gallerySlides");
  [...images].forEach(el => {
    el.style.display = "none";
  });
  images[index - 1].style.display = "block";
}
