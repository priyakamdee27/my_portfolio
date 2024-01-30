var typed = new Typed(".text", {
  strings: [" Software Developer", "Software Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const btn = document.getElementById("toggle");
console.log(btn);
const sunIcon = document.getElementsByClassName("fa-sun")[0];
btn.addEventListener("click", () => {
  console.log("button clicked");
  var cssLink = document.getElementById("cssLink");

  // Assuming you have two CSS files: style1.css and style2.css
  if (cssLink.getAttribute("href") === "style.css") {
    cssLink.setAttribute("href", "light-style.css");
    sunIcon.classList.add("fa-moon");
    sunIcon.classList.remove("fa-sun");
  } else {
    cssLink.setAttribute("href", "style.css");
    sunIcon.classList.add("fa-sun");
    sunIcon.classList.remove("fa-moon");
  }
});
