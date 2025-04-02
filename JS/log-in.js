document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.login-container');
    const cloudColors = [
        'rgba(255, 182, 193, 0.8)',  
        'rgba(220, 180, 255, 0.8)',   
        'rgba(180, 200, 255, 0.8)',   
        'rgba(255, 200, 220, 0.8)',   
        'rgba(200, 220, 255, 0.8)'   
    ];
    
    for (let i = 0; i < 20; i++) {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        
        const size = Math.random() * 120 + 60;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const color = cloudColors[Math.floor(Math.random() * cloudColors.length)];
        const duration = Math.random() * 25 + 15;
        const delay = Math.random() * 10;
        const blur = Math.random() * 10 + 15;
        const opacity = Math.random() * 0.3 + 0.7;
        
        cloud.style.width = `${size}px`;
        cloud.style.height = `${size * 0.6}px`;
        cloud.style.left = `${posX}%`;
        cloud.style.top = `${posY}%`;
        cloud.style.background = color;
        cloud.style.filter = `blur(${blur}px)`;
        cloud.style.opacity = opacity;
        cloud.style.animationDuration = `${duration}s`;
        cloud.style.animationDelay = `${delay}s`;
        
        cloud.style.borderRadius = `${50 + Math.random() * 30}% ${50 + Math.random() * 30}% ${50 + Math.random() * 30}% ${50 + Math.random() * 30}% / ${60 + Math.random() * 30}% ${60 + Math.random() * 30}% ${60 + Math.random() * 30}% ${60 + Math.random() * 30}%`;
        
        container.appendChild(cloud);
    }
    
    gsap.to(".login-box", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});

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