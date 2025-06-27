// Show login modal
const openLoginBtn = document.getElementById('open-login');
const loginModal = document.getElementById('login-modal');
const closeLoginBtn = document.getElementById('close-login');
const loginForm = document.getElementById('login-form');

openLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

closeLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simple validation (for demo only)
    if(username && password) {
        alert('Login successful!');
        loginModal.style.display = 'none';
    } else {
        alert('Please enter username and password.');
    }
});

// Sign Up modal logic
const openSignupBtn = document.getElementById('open-signup');
const signupModal = document.getElementById('signup-modal');
const closeSignupBtn = document.getElementById('close-signup');
const signupForm = document.getElementById('signup-form');

openSignupBtn.addEventListener('click', () => {
    signupModal.style.display = 'flex';
});

closeSignupBtn.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    if (!username || !password || !confirm) {
        alert('Please fill all fields.');
        return;
    }
    if (password !== confirm) {
        alert('Passwords do not match.');
        return;
    }
    alert('Sign up successful!');
    signupModal.style.display = 'none';
}); 