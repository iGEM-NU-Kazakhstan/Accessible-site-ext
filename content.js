
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

    var element = document.getElementById('rus');
    element.addEventListener('click',function(){
        document.getElementById('bs').innerText="Основные"
        document.getElementById('theme').innerText="Тема:"
        document.getElementById('dark').innerText="Темная"
        document.getElementById('white').innerText="Светлая"
        document.getElementById('sepia').innerText="Сепия"
        document.getElementById('font_size').innerText="Размер шрифта:"
        document.getElementById('bw').innerText="Монохромные картинки:"
        document.getElementById('hl').innerText="Выделять текст:"
        document.getElementById('as').innerText="Дополнительные"
        document.getElementById('block-title1').innerText="Настройки текста"
        document.getElementById('block-title2').innerText="Настройки картинок"
        document.getElementById('ls').innerText="Межстрочный интервал"
        document.getElementById('cf').innerText="Выберите шрифт:"
        document.getElementById('B').innerText="Яркость"
        document.getElementById('C').innerText="Контрастность"
        document.getElementById('S').innerText="Насыщенность"
        document.getElementById('font').innerText="Шрифт"
        document.getElementById('bloker').innerText="Блокировать подозрительные ссылки"
    })
    var element = document.getElementById('kaz');
    element.addEventListener('click',function(){   
        document.getElementById('bs').innerText="Негізгі меню"
        document.getElementById('theme').innerText="Тема:"
        document.getElementById('dark').innerText="Қараңғы"
        document.getElementById('white').innerText="Жарық"
        document.getElementById('sepia').innerText="Сепия"
        document.getElementById('font_size').innerText="Қаріп өлшемі:"
        document.getElementById('bw').innerText="Монохромды суреттер:"
        document.getElementById('hl').innerText="Мәтінді ерекшелеу:"
        document.getElementById('as').innerText="Қосымша меню"
        document.getElementById('block-title1').innerText="Мәтін параметрлері"
        document.getElementById('block-title2').innerText="Сурет параметрлері"
        document.getElementById('ls').innerText="Жол аралығы"
        document.getElementById('cf').innerText="Қаріпті таңдаңыз:"
        document.getElementById('B').innerText="Жарықтық"
        document.getElementById('C').innerText="Контраст"
        document.getElementById('S').innerText="Қанықтыру"
        document.getElementById('font').innerText="Қаріп"
        document.getElementById('bloker').innerText="Блокировать подозрительные ссылки"
        
    })
    var element = document.getElementById('eng');
    element.addEventListener('click',function(){
        document.getElementById('bs').innerText="Basic settings"
        document.getElementById('theme').innerText="Theme:"
        document.getElementById('dark').innerText="Dark"
        document.getElementById('white').innerText="White"
        document.getElementById('sepia').innerText="Sepia"
        document.getElementById('font_size').innerText="Font size:"
        document.getElementById('bw').innerText="Monochrome pictures:"
        document.getElementById('hl').innerText="Highlight text:"
        document.getElementById('as').innerText="Advanced settings"
        document.getElementById('block-title1').innerText="Text settings"
        document.getElementById('block-title2').innerText="Image settings"
        document.getElementById('ls').innerText="Line spacing:"
        document.getElementById('cf').innerText="Choose font:"
        document.getElementById('B').innerText="Brightness"
        document.getElementById('C').innerText="Contrast"
        document.getElementById('S').innerText="Saturation"
        document.getElementById('font').innerText="Font"
        document.getElementById('bloker').innerText="lock suspicious links:"
    })

   
})

function generate_theme(colorBg, colorText){
    my_code = 'document.querySelectorAll("*").forEach(e => e.style.backgroundColor = "'+colorBg+'");'
    my_code =  my_code +'document.querySelectorAll("*").forEach(e => e.style.color= "'+colorText+'");'
    return my_code
}

document.addEventListener("DOMContentLoaded", function () {
    var buttonDark = document.getElementById("dark");
    var buttonSepia = document.getElementById("sepia");
    var buttonWhite = document.getElementById("white");
   
    buttonDark.onclick = function () {
      let colorBg = "rgb(28, 29, 36)";
      let colorText = "#fff";


      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
          code: generate_theme(colorBg, colorText)
        });
      });
    };
   
    buttonSepia.onclick = function () {
      let colorBg = "rgb(186, 181, 171, 0.8)";
      let colorText = "rgb(141, 78, 19)";
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
          code: generate_theme(colorBg, colorText)
        });
      });
    };
   
    buttonWhite.onclick = function () {
      let colorBg = "#fff";
      let colorText = "#000";
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
          code: generate_theme(colorBg, colorText)
        });
      });
    };
  });


  // change font Size
  document.addEventListener("DOMContentLoaded", function () {
    var removeSize = document.getElementById("remove-size");
    var increaseSize = document.getElementById("add-size");
    var input = document.getElementById("font_size_input");
    let textSize = 16;
   
    removeSize.onclick = function () {
      textSize -= 0.5;
      input.value = textSize + " px"
      my_code = 'document.querySelectorAll("*").forEach(e => e.style.fontSize = "'+textSize+"px"+'");'
      if (textSize > 0) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.executeScript(tabs[0].id, {
            code: my_code
          });
        });
      } else {
        textSize = 0;
        fontSize.value = "0%";
      }
    };
   
    increaseSize.onclick = function () {
      textSize += 0.5;
      input.value = textSize + " px"
      my_code = 'document.querySelectorAll("*").forEach(e => e.style.fontSize = "'+textSize+"px"+'");'
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
          code: my_code
        });
      });
    };
  });


  document.addEventListener("DOMContentLoaded", function () {
    var removeBold = document.getElementById("remove-bold");
    var increaseBold = document.getElementById("add-bold");

   
    removeBold.onclick = function () {
        weight = "normal"
        my_code = 'document.querySelectorAll("*").forEach(e => e.style.fontWeight = "'+weight+'");'
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.executeScript(tabs[0].id, {
            code: my_code 
          });
        });
    };
   
    increaseBold.onclick = function () {
        weight = "bold"
        my_code = 'document.querySelectorAll("*").forEach(e => e.style.fontWeight = "'+weight+'");'
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id, {
            code: my_code
            });
        });
    };
  });



  // change font style
  document.addEventListener("DOMContentLoaded", function () {
    var buttonFontStyle = document.getElementById("button-for-fontStyle");
   
    buttonFontStyle.onclick = function () {
      const fonts = document.querySelectorAll('input[name="fonts"]');
      
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        fonts.forEach((font) => {
          if (font.checked) {
            my_code = 'document.querySelectorAll("*").forEach(e => e.style.fontFamily = "'+font.value+'");'
            chrome.tabs.executeScript(tabs[0].id, {
              code: my_code,
            });
          }
        });

    });
    }
  });


  // change font Size
document.addEventListener("DOMContentLoaded", function () {
    var removeInt = document.getElementById("remove-int");
    var increaseInt = document.getElementById("add-int");
    var input = document.getElementById("line_space_input");
    let textSize = 30;
   
    removeInt.onclick = function () {
      textSize -= 1;
      input.value = textSize
      if (textSize > 0) {
        my_code = 'document.querySelectorAll("*").forEach(e => e.style.lineHeight = "'+textSize+"px"+'");'
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.executeScript(tabs[0].id, {
            code: my_code
          });
        });
      } else {
        textSize = 0;
      }
    };
   
    increaseInt.onclick = function () {
      textSize += 1;
      input.value = textSize + " px"
      my_code = 'document.querySelectorAll("*").forEach(e => e.style.lineHeight = "'+textSize+"px"+'");'
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
          code: my_code
        });
      });
    };
  });

  document.addEventListener("DOMContentLoaded", function () {
    image_changer = document.getElementById("bw-image")
    
    image_changer.onclick = function () {
        if (image_changer.value == "Disabled"){
            image_changer.value = "Enabled"
            my_code = 'document.querySelectorAll("img").forEach(e => e.style = "filter:grayscale(1);");'
        }else{
            image_changer.value = "Disabled"
            my_code = 'document.querySelectorAll("img").forEach(e => e.style = "filter:grayscale(0);");'
        }
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id, {
                code: my_code
              });

        });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    checkbox = document.getElementById("highlight")
    checkbox.onclick = function () {
        if (checkbox.value == "Enabled"){
            checkbox.value = "Disabled"
        }else{
            checkbox.value = "Enabled"
        }
        my_code = 'var style = document.createElement("style");'+'style.className="color";'+
                    'style.innerHTML = ".select::selection{color: #fff;background-color: #000;}";'+
                    'if (document.querySelectorAll("style.color")[0] == null){'+
                        'var style = document.createElement("style");'+
                        'style.innerHTML = ".select::selection{color: #fff;background-color: #000;}";'+
                        'style.className="color";document.getElementsByTagName("head")[0].appendChild(style);}'
                    +'document.querySelectorAll("*").forEach(e => e.classList.toggle("select"));'
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id, {
                code: my_code
              });
        });
    }
});

// change font style
document.addEventListener("DOMContentLoaded", function () {
    var buttonFontStyle = document.getElementById("button-for-colorStyle");
   
    buttonFontStyle.onclick = function () {
      const colors = document.querySelectorAll('input[name="colors"]');
      
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        colors.forEach((color) => {
          if (color.checked) {
            my_code = 'document.querySelectorAll("style.color").forEach(e => e.innerHTML=".select::selection{color:'+color.value+'; background-color:'+color.id+';}");'
            chrome.tabs.executeScript(tabs[0].id, {
              code: my_code,
            });
          }
        });

    });
    }
  });


  window.onload = function () {
	function updateLabel() {
		var enabled = chrome.extension.getBackgroundPage().enabled;
		document.getElementById('toggle_button').value = enabled ? "Disabled" : "Enabled";
	}
	document.getElementById('toggle_button').onclick = function () {
		var background = chrome.extension.getBackgroundPage();
		background.enabled = !background.enabled;
		updateLabel();
	};
	updateLabel();
}


document.addEventListener("DOMContentLoaded", function () {
    var removeBright = document.getElementById("remove-bright");
    var increaseBright = document.getElementById("add-bright");

    var removeSatur = document.getElementById("remove-satur");
    var increaseSatur = document.getElementById("add-satur");

    var removeContr = document.getElementById("remove-contr");
    var increaseContr = document.getElementById("add-contr");

    var bright_input = document.getElementById("bright_input");
    var contr_input = document.getElementById("contr_input");
    var satur_input = document.getElementById("satur_input");

    var button = document.getElementById("change_image");

    let bright = 1;
    let satur = 1;
    let contr = 1;

    removeBright.onclick = function () {
        bright-= 0.1;
        document.getElementById("test_img").style = "filter:brightness("+bright+") contrast("+contr+") saturate("+satur+")"
      
      bright_input.value = Math.round(bright*100)+"%"
      if (bright < 0) {
        bright = 0;
        bright_input.value = 0;
      }
    };
    increaseBright.onclick = function () {
        bright += 0.1;
        document.getElementById("test_img").style = "filter:brightness("+bright+") contrast("+contr+") saturate("+satur+")"
      
        bright_input.value = Math.round(bright*100)+"%"
    };

    removeSatur.onclick = function () {
        satur-= 0.1;
        document.getElementById("test_img").style = "filter:brightness("+bright+") contrast("+contr+") saturate("+satur+")"
        satur_input.value = Math.round(satur*100)+"%"
        if (satur < 0) {
          satur = 0;
          satur_input.value = 0;
        }
    };

    increaseSatur.onclick = function () {
        satur += 0.1;
        document.getElementById("test_img").style = "filter: brightness("+bright+") contrast("+contr+") saturate("+satur+")"
        satur_input.value = Math.round(satur*100)+"%"
    };

    removeContr.onclick = function () {
        contr-= 0.1;
        document.getElementById("test_img").style = "filter: brightness("+bright+") contrast("+contr+") saturate("+satur+")"
        contr_input.value = Math.round(contr*100)+"%"
        if (contr < 0) {
            contr = 0;
            contr_input.value = 0;
        }
    };

    increaseContr.onclick = function () {
        contr += 0.1;
        document.getElementById("test_img").style = "filter: brightness("+bright+") contrast("+contr+") saturate("+satur+")"
        contr_input.value = Math.round(contr*100)+"%"
    };

    button.onclick = function (){
        my_code = 'document.querySelectorAll("img").forEach(e => e.style = "filter:brightness('+bright+') contrast('+contr+') saturate('+satur+')");'
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
        code: my_code
    });
  });

    };

  });




  