const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    if (email === '' || password === '') {
        alert('Please fill in all fields');
    } else {
        const formData = {
          email: email,
          password: password,
        };
    
        console.log(formData);
    
        loginForm.reset();
    }
});
