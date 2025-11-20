let opensidebar = document.querySelector(".showsidebar");
let closesidebar = document.querySelector(".hidesidebar");
let sidebar = document.querySelector(".sidebar");

// for opening Sidebar
opensidebar.addEventListener("click", ()=>{
    sidebar.style.display = "flex";
});

// for closing Sidebar
closesidebar.addEventListener("click", ()=>{
    sidebar.style.display = "none";
});

// to hide Navbar on scroll down and to show Navbar on scroll up.
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// for smooth animation of section
function revealSections() {
  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    const rect = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (rect < windowHeight - 120) {
      section.classList.add("show");    // fade/slide IN
    } else {
      section.classList.remove("show"); // fade/slide OUT when scrolling up
    }
  });
}

window.addEventListener("scroll", revealSections);
revealSections(); // run on page load