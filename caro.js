const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const scrollCont = document.querySelector(".card-slid");
const scrollCont2 = document.querySelector(".card-slid2");
const prevBtnn = document.querySelector(".prevv");
const nextBtnn = document.querySelector(".nextt");

scrollCont.addEventListener("wheel", function (e) {
  e.preventDefault();
  scrollCont.scrollLeft += e.deltaX;
});
prevBtn.addEventListener("click", function () {
  console.log("prev clicked");
  scrollCont.scrollLeft += 240;
});
nextBtn.addEventListener("click", function () {
  console.log("next clicked");
  scrollCont.scrollLeft -= 240;
});
scrollCont2.addEventListener("wheel", function (e) {
  e.preventDefault();
  scrollCont2.scrollLeft += e.deltaX;
});

nextBtnn.addEventListener("click", function () {
  console.log("next clicked");
  scrollCont2.scrollLeft -= scrollCont2.scrollLeft - 240;
});
prevBtnn.addEventListener("click", function () {
  console.log("prev clicked");
  scrollCont2.scrollLeft += 240;
});

let remainingSeconds = 259200;
setInterval(() => {
  remainingSeconds--;
  const days = Math.floor(remainingSeconds / 86400);
  const hours = Math.floor((remainingSeconds % 86400) / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;
  document.querySelector(".day").textContent = `${days}`;
  document.querySelector(".hour").textContent = `${hours}`;
  document.querySelector(".miin").textContent = `${minutes}`;
  document.querySelector(".seec").textContent = `${seconds}`;
}, 1000);
