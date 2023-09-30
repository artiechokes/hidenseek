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

//Collapse Hamburger
$(document).on("click", function () {
  $("#navbar-toggler").collapse("hide");
});

//collapse when clicking outside menu
$(".nav-item").click(function () {
  window.location = $(this).find("a").attr("href");
  return false;
});

//match with media query
const mql = window.matchMedia("(max-width:769px)");

mql.onchange = (event) => {
  if (event.matches) {
    $(".nav-item.the-league").addClass("d-flex align-items-center");
  } else {
    $(".nav-item.the-league").removeClass("d-flex align-items-center");
  }
};

//checks Media Query on Load
const mqlOnLoad = () => {
  if (mql.matches) {
    $(".nav-item.the-league").addClass("d-flex align-items-center");
  } else {
    $(".nav-item.the-league").removeClass("d-flex align-items-center");
  }
};
mqlOnLoad();

//hamburger icon
$(".navbar-toggler").on("click", () => {
  if ($(".navbar-toggler .bi-list").length > 0) {
    $(".navbar-toggler .bi").removeClass("bi-list");
    $(".navbar-toggler .bi").addClass("bi-x");
  } else {
    $(".navbar-toggler .bi").removeClass("bi-x");
    $(".navbar-toggler .bi").addClass("bi-list");
  }
});
