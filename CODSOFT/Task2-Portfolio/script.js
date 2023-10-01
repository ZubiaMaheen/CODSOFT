
let menu = document.querySelector(".menu");
let navbar = document.querySelector("#navbar");
menu.onclick = () => {
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("block");
};
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".left,.heading", { origin: "top" });
ScrollReveal().reveal(".container,.proj,.contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".left h1,.aboutLeft", { origin: "left" });
ScrollReveal().reveal(".left h3,.left p,.aboutRight", { origin: "right" });
const clip = document.querySelectorAll(".clip");

for (let i = 0; i < clip.length; i++) {
  clip[i].addEventListener("mouseenter", function (e) {
    clip[i].play();
  });
  clip[i].addEventListener("mouseout", function (e) {
    clip[i].pause();
  });
}





    