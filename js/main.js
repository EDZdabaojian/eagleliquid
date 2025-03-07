/* Tab Switching */

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
      tab.addEventListener("click", function (e) {
          e.preventDefault();

          // Remove active class from all tabs and contents
          tabs.forEach(t => t.classList.remove("active"));
          contents.forEach(content => content.classList.remove("active"));

          // Add active class to the clicked tab and corresponding content
          const tabId = this.getAttribute("data-tab");
          this.classList.add("active");
          document.getElementById(tabId).classList.add("active");
      });
  });
});


/* Get Header */
document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
      .then(response => response.text())
      .then(data => document.getElementById("header-placeholder").innerHTML = data);
});

/* Get Footer */
document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
      .then(response => response.text())
      .then(data => document.getElementById("footer-placeholder").innerHTML = data);
});


/* Open External Site Confirmation */
function openExternalSite(url) {
  let userConfirmation = confirm("Open external website?");
  if (userConfirmation) {
      window.location.href = url;
  }
}