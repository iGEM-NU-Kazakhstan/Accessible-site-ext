document.addEventListener("DOMContentLoaded", function () {
    var buttonDark = document.getElementById("dark");
    var buttonSepia = document.getElementById("sepia");
    buttonDark.addEventListener("click", function () {
      document.body.style.backgroundColor = "red";
    });
    buttonSepia.addEventListener("click", function () {
      document.body.style.backgroundColor = "white";
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var textOptionsTitle1 = document.querySelector("#block-title1");
    var blockText2 = document.querySelector("#block-text1");
    textOptionsTitle1.addEventListener("click", function () {
      blockText2.classList.toggle("active");
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var textOptionsTitle2 = document.querySelector("#block-title2");
    var blockText2 = document.querySelector("#block-text2");
    textOptionsTitle2.addEventListener("click", function () {
      blockText2.classList.toggle("active");
    });
  });