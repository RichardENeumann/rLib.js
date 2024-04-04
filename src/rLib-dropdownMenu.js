export default function showDropdownMenu(target) {
  const menu = target;
  if (menu.style.maxHeight === "0px" || menu.style.maxHeight === "") {
    menu.style.maxHeight = "200px";
    menu.style.visibility = "visible";
  } else {
    menu.style.maxHeight = "0px";
    menu.style.visibility = "hidden";
  }
}
