export default function showDropdownMenu(target) {
  const menu = target;
  if (menu.style.maxHeight === "0px" || menu.style.maxHeight === "") {
    menu.style.maxHeight = "200px";
  } else {
    menu.style.maxHeight = "0px";
  }
}
