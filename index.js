let sky = document.getElementById("sky")
let sea = document.getElementById("sea")
let land = document.getElementById("land")
let decor = document.getElementById("decor")
let cloud = document.getElementById("cloud")
let island = document.getElementById("island")
let boat = document.getElementById("boat")
let text = document.getElementById("text")
let section = document.getElementById("content")

const image = document.querySelector(".ukiyo");
new Ukiyo(image);

function parallaxSetup() {
  let value = window.scrollY
  if (value < window.innerWidth / 2) {
    island.style.left = value * -1 + 'px'
    boat.style.left = value + 'px'
    text.style.transform = `translateY(${(value / 1.5)}px)`;
  }
  if (value < 400) {
    land.style.transform = `translateY(${(value / 2)}px)`;
    decor.style.transform = `translateY(${(value / 2)}px)`;
    sea.style.transform = `translateY(${(value / 3)}px)`;
    island.style.transform = `translateY(${(value / 3)}px)`;
    boat.style.transform = `translateY(${(value / 3)}px)`;
    section.style.top = Math.floor(land.offsetHeight + (value / 2)) + 'px'
  }
}

window.addEventListener('scroll', parallaxSetup)
window.addEventListener('resize', parallaxSetup)