const shareButton = document.querySelector(".share-button");
const socialLinks = document.querySelector(".social-links");
const button = document.querySelector("button");

shareButton.addEventListener("click", (e) => {
  if (window.innerWidth >= 800) {
    socialLinks.classList.toggle("active");
  } else {
    socialLinks.classList.toggle("active-mobile");
    shareButton.classList.toggle("share-active");
    button.classList.toggle("button-active");
  }
});
