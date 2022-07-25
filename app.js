let mainNavLinks = document.querySelectorAll(".navbar .clickable");
let mainSections = document.querySelectorAll(".main section");

let lastId;
let cur = [];


window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (fromTop >= section.offsetTop - 10 && fromTop < section.offsetTop + section.offsetHeight - 10)
    {
      link.classList.add("active");
    } 
    else {
      link.classList.remove("active");
    }
  });
});