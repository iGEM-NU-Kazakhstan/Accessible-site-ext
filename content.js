
  document.addEventListener("DOMContentLoaded", function () {
    var textOptionsTitle1 = document.querySelector("#block-title1");
    var blockText1 = document.querySelector("#block-text1");

    var textOptionsTitle2 = document.querySelector("#block-title2");
    var blockText2 = document.querySelector("#block-text2");

    textOptionsTitle1.addEventListener("click", function () {
      blockText1.classList.toggle("active");
      textOptionsTitle1.classList.toggle("active");
      blockText2.classList.remove("active");
      textOptionsTitle2.classList.remove("active");
    });
    textOptionsTitle2.addEventListener("click", function () {
        blockText1.classList.remove("active");
        textOptionsTitle1.classList.remove("active");
        blockText2.classList.toggle("active");
        textOptionsTitle2.classList.toggle("active");
      });
  });
  
document.addEventListener('DOMContentLoaded',function(){
    var element = document.getElementById('dark');
    element.addEventListener('click',function(){
        chrome.tabs.getSelected(null, function(tab){
            chrome.tabs.executeScript(tab.id,{file:"alert.js"}, function(response){
                
            })
        })

    })
})