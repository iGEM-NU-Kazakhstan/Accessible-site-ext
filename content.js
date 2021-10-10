const blockTitle = document.querySelector('.block-title')
const blockText = document.querySelector('.block-text')

blockTitle.addEventListener('click', function() {
    blockText.classList.toggle('active')
})