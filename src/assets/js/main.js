"use strict";
const navigation = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar__link");
const sectionOne = document.querySelector(".section--1");
const sections = document.querySelectorAll(".section");
const header = document.querySelector(".header");
const animationsFade = document.querySelectorAll(".animations--fade");
const lazyImgs = document.querySelectorAll(".img--lazy");
const pagination = document.querySelector(".pageination");
const loader = document.querySelector(".loader");
const finisehdLoading = () => {
  loader.style.display = "none";
  loader.style.display = "none";
  // document.querySelector(("body".style.overflow = "hidden"));
};
window.addEventListener("load", finisehdLoading);

const animationsFadeHide = () => {
  animationsFade.forEach((el) => {
    el.style.opacity = "0";
  });
};
const animationsFadeShow = () => {
  animationsFade.forEach((el) => {
    el.style.opacity = "1";
    el.style.transition = "all  1s ease";
  });
};

const animationsObserverOpts = {
  root: null,
  threshold: 0.15,
  rootMargin: "1000px 0px 0px 0px ",
};
const animationsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) animationsFadeShow();
  });
};
animationsFadeHide();
const animationsObserver = new IntersectionObserver(animationsCallback);
animationsFade.forEach((el) => animationsObserver.observe(el));
//////////////////////////////////
const observerCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) navigation.classList.add("navbar--active");
    if (entry.isIntersecting) navigation.classList.remove("navbar--active");
  });
};
const observerOpts = {
  root: null,
  threshold: 0.3,
  rootMargin: "-150px 0px 0px 0px",
};

const sectionObserver = new IntersectionObserver(
  observerCallback,
  observerOpts
);
if (header) {
  sectionObserver.observe(header);
} else {
  navigation.style.backgroundColor = "#fff";
  navigation.style.color = "#1f1f1f";
  navigation.style.padding = "20px 0px";
  navigation.style.borderBottom = " 1px solid #e9ecef";
}
/////////////////////////
// Lazy Images
/////////////////////////
const lazyImgsObserverCallback = function (entries, observer) {
  const [entry] = entries;
  entry.target.src = entry.target.getAttribute("src");

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("img--lazy");
  });
};
const lazyImgsObserverOpts = {
  root: null,
  threshold: 0.3,
  // rootMargin: "-150px 0px 0px 0px",
};

const lazyImgsObserver = new IntersectionObserver(
  lazyImgsObserverCallback,
  lazyImgsObserverOpts
);
lazyImgs.forEach((img) => lazyImgsObserver.observe(img));

$(function () {
  $(".navbar__link").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top,
      },
      1000
    );
  });
});
