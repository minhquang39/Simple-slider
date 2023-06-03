window.onload = function () {
  const slider = document.querySelector(".box");
  const itemWidth = document.querySelector(".img").clientWidth;
  const pre = document.querySelector(".pre");
  const next = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");
  slider.style.width = `${itemWidth * 5}px`;

  let positionX = 0;
  let index = 0;
  function handleChangeSlide(direction) {
    if (direction === 1) {
      if (index === 4) {
        slider.style.transform = `translateX(${0}px)`;
        index = -1;
      }
      index++;
      console.log(index);
      positionX = positionX - itemWidth;
      console.log(positionX);
      if (positionX < -2000) {
        positionX = 0;
      }
      slider.style.transform = `translateX(${positionX}px)`;
    } else if (direction === -1) {
      index--;
      if (index < 0) {
        positionX = -2000;
        slider.style.transform = `translateX(${positionX}px)`;
        index = 4;
        positionX = 2000;
        return;
      }
      positionX = positionX - itemWidth;
      console.log(positionX);

      if (positionX < 500) {
        positionX = 0;
      }
      slider.style.transform = `translateX(${-positionX}px)`;
    }
    [...dots].forEach((el) => {
      el.classList.remove("active");
    });
    [...dots][index].classList.add("active");
  }
  [...dots][0].classList.add("active");

  pre.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  next.addEventListener("click", function () {
    handleChangeSlide(1);
  });

  [...dots].forEach((dot) => {
    dot.addEventListener("click", (e) => {
      [...dots].forEach((el) => {
        el.classList.remove("active");
      });
      e.target.classList.add("active");
      let slideIndex = e.target.value;
      index = slideIndex;
      positionX = index * itemWidth;
      slider.style.transform = `translateX(${-positionX}px)`;
    });
  });
};
