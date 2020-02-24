// Animation durration
AOS.init({
  duration: 1200,
});

// Mobile Navbar dropdown
function navBar() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let path = window.location.pathname;
let page = path.split("/").pop();

if (page == "index") {
  // Function to resize main content of landing page unpon resizing window
  let landing = document.querySelector(".landing");
  landing.style.minHeight = window.innerHeight - 50 + "px";

  function resizeWindow() {
    let landing = document.querySelector(".landing");
    landing.style.minHeight = window.innerHeight - 50 + "px";
  };

  window.addEventListener("resize", resizeWindow);
}