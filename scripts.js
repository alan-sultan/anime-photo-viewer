document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required.';
    } else {
        errorMessage.textContent = '';
        alert('Sign in successful!');
        // Here you can add code to handle the sign-in process, such as sending a request to a server.
    }
});
