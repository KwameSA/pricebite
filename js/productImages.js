function setupImageSwitching() {
  const mainImage = document.querySelector(".main-image");
  const thumbnails = Array.from(document.querySelectorAll(".thumbnail-row img"));

  if (!mainImage || thumbnails.length === 0) return; // guard clause to prevent error

  let currentIndex = 0;

  function showImage(index) {
    if (index < 0) index = thumbnails.length - 1;
    else if (index >= thumbnails.length) index = 0;
    currentIndex = index;

    mainImage.style.opacity = 0;

    setTimeout(() => {
      mainImage.src = thumbnails[currentIndex].src;
      mainImage.style.opacity = 1;
    }, 200);
  }

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      showImage(index);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      showImage(currentIndex + 1);
    } else if (e.key === "ArrowLeft") {
      showImage(currentIndex - 1);
    }
  });

  mainImage.style.transition = "opacity 0.2s ease";
  mainImage.style.opacity = 1;
}

export function setupImages() {
  setupImageSwitching();
}
