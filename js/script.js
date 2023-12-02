const loginButton = document.getElementById('loginButton');
const indexButton = document.getElementById('indexButton');
const loginBox = document.getElementById('loginBox');
const overlay = document.getElementById('overlay');

loginButton.addEventListener('click', () => {
    loginBox.style.display = 'block';
    overlay.style.display = 'block';
});

indexButton.addEventListener('click', function () {
    window.location.href = 'iphone15pro.html';
});

function closeLoginBox() {
    loginBox.style.display = 'none';
    overlay.style.display = 'none';
}

function submitLogin() {
    alert('Login submitted!');
    closeLoginBox();
}

function submitSignup() {
    alert('Signup submitted!');
    overlay.style.display = 'none';
}

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeLoginBox();
    }
});

