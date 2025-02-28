function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


function switchTab(tabId) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active');
  });

  // Show selected tab
  document.getElementById(tabId).classList.add('active');
}

/*
window.addEventListener("scroll", function() {
  let element = document.querySelector(".product-box");
  let position = element.getBoundingClientRect().top;
  let windowHeight = window.innerHeight;

  if (position < windowHeight) {
    element.classList.add("show"); // Play animation
  }
});
*/
