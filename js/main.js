// Script Accordion
const faq = document.getElementsByClassName("content-box");

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

var toUp = document.getElementById("btnTop");
toUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
$(toUp).hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(toUp).show().fadeIn(500);
  } else {
    $(toUp).fadeOut().hide(500);
  }
});

var toUp = document.getElementById("btnTop");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    toUp.style.display = "block";
  } else {
    toUp.style.display = "none";
  }
}

$(document).ready(function () {
  $(".container").not(".all").hide();
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "explore") {
      $(".container").fadeIn(1000);
    } else {
      $(".container")
        .not("." + value)
        .hide(0);
      $(".container")
        .filter("." + value)
        .fadeIn(300);
    }
  });
  $(".list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
