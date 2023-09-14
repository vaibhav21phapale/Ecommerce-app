function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin@admin.com' && password === '123456') {
      document.getElementById('alert').innerHTML = 'Login successful';
      document.getElementById('alert').style.display = 'block';
    } else {
      document.getElementById('alert').innerHTML = 'incorrect email or password';
  }}