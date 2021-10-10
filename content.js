var inputs = document.querySelectorAll('input')
console.log(inputs)
if (inputs !== null) {
    for (const item of inputs){ 
        $(item).attr('x-webkit-speech',true);
    }
}

