"use strict";

// selectors

const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav-links");

// navigation bar

function navHoverHandler(e) {
  if (!e.target.classList.contains("nav-link")) return;
  const link = e.target;
  link.classList.add("hover-border");
  const siblings = e.target.closest(".nav-links").querySelectorAll(".nav-link");
  console.log(link);
  // console.log(siblings);
  siblings.forEach((element) => {
    console.log(link === element);
    if (link !== element) {
      element.style.opacity = this;
    }
  });
}

navLinks.addEventListener("mouseover", navHoverHandler.bind(0.7));

navLinks.addEventListener("mouseout", navHoverHandler.bind(1));
// navLinks.addEventListener("mouseout", function (e) {
//   //   console.log(e.target.classList);
//   const link = e.target.tagName;
//   const siblings = e.target.closest(".nav").querySelectorAll("li");
//   siblings.forEach((element) => {
//     if (link !== element) {
//       element.style.opacity = 1;
//     }
//   });
// });
