const [current, imgs] = [
  document.querySelector("#current"),
  document.querySelectorAll(".imgs img"),
];
imgs[0].style.opacity = 0.2;

const opacity = 0.4;
const imageClick = (e) => {
  imgs.forEach((img) => (img.style.opacity = 1));

  current.src = e.target.src;

  current.classList.add("fade-in");
  setTimeout(() => {
    current.classList.remove("fade-in");
  }, 500);

  e.target.style.opacity = opacity;
};

imgs.forEach((img) => img.addEventListener("click", imageClick));
