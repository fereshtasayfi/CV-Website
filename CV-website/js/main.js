
const slider = document.getElementById("slider");
const slides = Array.from(slider.children);
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");

let index = 0;

function update() {
    slider.style.transform = `translateX(-${index * 100}%)`;
    btnPrev.disabled = index === 0
    btnNext.disabled = index === slides.length -1;
    btnPrev.style.opacity = btnPrev.disabled ? "0" : "1";
    btnNext.style.opacity = btnNext.disabled ? "0" : "1";    
}

btnNext.addEventListener("click", (e) => {
    e.preventDefault();
    if (index < slides.length - 1) {
        index++;
    }
    update();
});

btnPrev.addEventListener("click", (e) => {
    e.preventDefault();
    if (index > 0) {
        index--;
    }
    update();
});

update();