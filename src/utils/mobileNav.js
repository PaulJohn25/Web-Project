// Problem: When we click on our bars icon, nothing happens...

// Goal: We want our mobile menu to open when we click on our bars icon!

// Solution:

// Create a click event on the bars ic that changes the display property on the mobile menu from none to flex.

// Step:
// 1. Select the bars icon
// 2. Select the mobile nav
// 3. Create a click event listener

const mobileNav = () => {
  const barsBtn = document.querySelector("#bars-btn");
  const closeBtn = document.querySelector("#mobile-nav-close-btn");
  const mobileNav = document.querySelector("#mobile-nav");

  const handleBarsBtn = () => mobileNav.classList.add("show");
  const handleCloseBtn = () => mobileNav.classList.remove("show");

  barsBtn.onclick = handleBarsBtn;
  closeBtn.onclick = handleCloseBtn;
};

export default mobileNav;
