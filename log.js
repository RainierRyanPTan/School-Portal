document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(username === 'admin' && password === 'password') {

        localStorage.setItem('isLoggedIn', 'true');

        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password');
    }
});
if(localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'index.html';
}
document.querySelector('.logout-btn')?.addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
});