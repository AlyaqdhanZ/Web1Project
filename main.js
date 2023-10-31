// getting the button
const toTop = document.querySelector(".top");

// calculating the scroll height by vw istead of px
function vw(percent) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (percent * w) / 100;
}

// if you scroll 30% the button will show else hide
window.addEventListener("scroll", () => {
  if (window.pageYOffset > vw(30)) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})