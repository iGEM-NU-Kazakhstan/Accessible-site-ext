var style = document.createElement("style");
style.className="color";
style.innerHTML = ".select::selection{color: #fff;background-color: #000;}";
if (document.querySelectorAll("style.color")[0] == null){
    document.getElementsByTagName("head")[0].appendChild(style);
}

sdocument.querySelectorAll("*").forEach(e => e.classList.toggle("select"));