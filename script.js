window.onload = function () {
  const slider = document.querySelector(".box");
  const itemWidth = document.querySelector(".img").clientWidth;
  const itemLength = document.querySelectorAll(".img").length;
  const pre = document.querySelector(".pre");
  const next = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");

  let positionX = 0;
  let index = 0;
  function handleChangeSlide(direction) {
    if (direction === 1) {
      index++;
      positionX += itemWidth;
      if (index >= itemLength) {
        index = 0;
        positionX = 0;
        slider.scrollLeft = positionX;
      }
    } else if (direction === -1) {
      index--;
      positionX -= itemWidth;
      if (index < 0) {
        index = itemLength - 1;
        positionX = itemLength * itemWidth;
        slider.scrollLeft = positionX;
        positionX -= itemWidth;
      }
    }
    console.log(index);
    slider.scrollLeft = positionX;
    dots.forEach((e) => {
      e.classList.remove("active");
    });
    dots[index].classList.add("active");
  }
  dots[0].classList.add("active");

  pre.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  next.addEventListener("click", function () {
    handleChangeSlide(1);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      dots.forEach((e) => {
        e.classList.remove("active");
      });
      index = dot.value;
      positionX = index * itemWidth;
      slider.scrollLeft = positionX;
      dot.classList.add("active");
    });
  });
};
