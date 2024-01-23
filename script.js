function validateForm(event) {
    event.preventDefault();
    const input = document.getElementById('email');
    const err = document.getElementById('invalid');
    const sec = document.getElementsByClassName('sec5')[0];
    if (!isValidEmail(input.value.trim())) {
        err.style.display = 'block';
        sec.style.paddingBottom = '25px';
    } else {
        err.style.display = 'none';
        sec.style.paddingBottom = '40px';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}