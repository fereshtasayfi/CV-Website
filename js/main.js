const slider = document.getElementById("slider");
const slides = Array.from(slider.children);
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");
const navBtns = Array.from(document.querySelectorAll(".navBtn"));

let index = 0;
function setActiveButton() {
  navBtns.forEach((b) => b.classList.remove("is-active"));
  const active = navBtns.find((b) => Number(b.dataset.index) === index);
  if (active) active.classList.add("is-active");
}

function update() {
  slider.style.transform = `translateX(-${index * 100}%)`;

  btnPrev.disabled = index === 0;
  btnNext.disabled = index === slides.length - 1;

  setActiveButton();
}

btnNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (index < slides.length - 1) index++;
  update();
});
btnPrev.addEventListener("click", (e) => {
  e.preventDefault();
  if (index > 0) index--;
  update();
});
navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    index = Number(btn.dataset.index);
    update();
  });
});

update();
