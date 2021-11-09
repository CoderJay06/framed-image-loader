// grab elements from the dom:
// image, inputs
const image = document.getElementById("image");
const urlInput = document.querySelector("input[name='url']");
const colorInput = document.querySelector("input[name='color']");
const widthInput = document.querySelector("input[name='width']");

// default image attributes
let url = "",
  color = "#000",
  width = "10";

// add functions for hiding and setting up image
const hideImageOnLoad = function () {
  image.style.backgroundImage = "none";
};

const setImage = function (url, color, width) {
  image.style.backgroundImage = `url("${url}")`;
  image.style.borderStyle = "solid";
  image.style.borderColor = color;
  image.style.borderWidth = `${width}px`;
};

const handleUrlChange = function () {
  url = urlInput.value;
  setImage(url, color, width);
};

const handleColorChange = function () {
  color = colorInput.value;
  setImage(url, color, width);
};

const handleWidthChange = function () {
  width = widthInput.value;
  console.log(width);
  setImage(url, color, width);
};

// add event listeners for each input
urlInput.addEventListener("change", handleUrlChange);
colorInput.addEventListener("change", handleColorChange);
widthInput.addEventListener("change", handleWidthChange);

hideImageOnLoad();
