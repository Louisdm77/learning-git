const sizeBtn = document.querySelectorAll(".size");

sizeBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log("clicked");
    if (btn.style.backgroundColor === "white") {
      btn.style.backgroundColor = "black";
      btn.style.color = "white";
    } else {
      btn.style.backgroundColor = "white";
      btn.style.color = "black";
    }
  });
});
