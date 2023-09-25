const date = new Date();
let day = date.getDay();
let hours;
$(".row").innerHTML = day;

const storeStatus = window.addEventListener("load", () => {
  hours = date.getHours();
  if (hours > 10 && hours < 22) {
    $(".bi-clock").addClass("store-open");
    $(".store-status").addClass("store-open");
    $(".store-status").text("OPEN");
  } else {
    $(".bi-clock").addClass("store-closed");
    $(".store-status").addClass("store-closed");
    $(".store-status").text("CLOSED");
  }
  console.log(hours);
});

// track screen size. Can also try by using window.matchMedia
window.addEventListener("resize", () => {
  // if (window.innerWidth < 768) {
  //   $(".the-league").addClass("col-4");
  // } else {
  //   $(".the-league").removeClass("col-4");
  // }

  // if (window.innerWidth >= 960 && window.innerWidth <= 990) {
  //   $(".navbar-collapse").css("margin-right", "50px");
  // } else {
  //   $(".navbar-collapse").css("margin-right", "");
  // }
  console.log(window.innerWidth);
});

//function, accept string (HTML)
// div tag  is missing closing tag, the \
//find and close all the div tags

document.querySelectorAll("div");

const closeTag = (tag) => {
  let divArr = document.querySelectorAll("div");

  for (let i = tag.length - 1; i > 0; i--) {
    if (i % 2 == 1) {
      divArr[i].replaceWith("span");
    }
  }
};
