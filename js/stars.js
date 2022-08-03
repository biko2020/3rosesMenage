const allStars = document.querySelectorAll(".star");

allStars.forEach((star, i) => {
  star.onclick = function () {
    let current_start_level = i + 1;

    allStars.forEach((star, j) => {
      current_start_level >= j + 1
        ? (star.innerHTML = "&#9733")
        : (star.innerHTML = "&#9734");
    });
  };
});
