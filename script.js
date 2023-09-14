document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // user input
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // login validation
        if (email === 'admin@admin.com' && password === '123456') {
            // Successful login
            errorMessage.textContent = 'Login successful';
            errorMessage.style.color = 'green';
        } else {
            // Login Failed
            errorMessage.textContent = 'Invalid email or password.';
            errorMessage.style.color = 'red';
        }
    });
});
