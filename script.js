const button = document.querySelector(".icon");
const listWrapper = document.querySelector(".ul-list");

let clickcounter = 0;

button.addEventListener("click", () => {
  clickcounter++;
  if (clickcounter <= 4) {
    listWrapper.style.transform = `translateX(${clickcounter * -350}px)`;
  } else {
    listWrapper.style.transform = `translateX(0px)`;
    clickcounter = 0;
  }
});
