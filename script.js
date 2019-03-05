let sliderimg = document.querySelectorAll(".slide");
let arrowLeft = document.getElementById("left-button");
let arrowRight = document.getElementById("right-button");
let start = 0;
let end = 3;
arrowLeft.disabled = true;
// Init slider
function startSlide() {
  console.log(screen.width);
  //   reset();
  if (screen.width < 620) {
    end = 1;
    for (let i = 0; i < sliderimg.length; i++) {
      if (i > 1) {
        sliderimg[i].style.display = "none";
      } else {
        sliderimg[i].style.display = "block";
      }
    }
  } else {
    for (let i = 0; i < sliderimg.length; i++) {
      if (i > 3) {
        sliderimg[i].style.display = "none";
      } else {
        sliderimg[i].style.display = "block";
      }
    }
  }
}
// Show prev
function slideLeft() {
  arrowRight.disabled = false;
  --start;
  sliderimg[start].style.display = "block";
  sliderimg[end--].style.display = "none";
  if (start == 0) {
    arrowLeft.disabled = true;
  }
}

// Show next
function slideRight() {
  arrowLeft.disabled = false;
  end++;
  sliderimg[start].style.display = "none";
  start++;

  sliderimg[end].style.display = "block";
  if (end == sliderimg.length - 1) {
    arrowRight.disabled = true;
  }
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  slideLeft();
});
// Right arrow click
arrowRight.addEventListener("click", function() {
  slideRight();
});

startSlide();
