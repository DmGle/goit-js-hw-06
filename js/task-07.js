const fontSizeControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

fontSizeControl.addEventListener('input', function () {
    const fontSize = fontSizeControl.value;
    textSpan.style.fontSize = `${fontSize}px`;
});
