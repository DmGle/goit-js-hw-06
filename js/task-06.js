const validationInput = document.querySelector('#validation-input');
const requiredLength = parseInt(validationInput.getAttribute('data-length'));

validationInput.addEventListener('blur', function () {
    const inputText = validationInput.value.trim();

    if (inputText.length === requiredLength) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
});
