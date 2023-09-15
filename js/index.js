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

window.addEventListener("resize", () => {
  if ($(window).width() < 960) {
    $(".the-league").addClass("col-4");
  } else {
    $(".the-league").removeClass("col-4");
  }
  console.log($(window).width());
});
