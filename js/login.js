// Step 1: add event listender to submit button
document.getElementById('submit-btn').addEventListener('click', () => {
    // Step 2: Get email value from the input field
    const emailField = document.getElementById('email-input');
    const emailValue = emailField.value;
    // Step 3: Get password value from the input field
    const passwordField = document.getElementById('password-input');
    const passwordValue = passwordField.value;
    // Step 4: Checking validity
    if((emailValue === 'shamim@me.com' || emailValue === 'abshamim') && passwordValue === 'mims') {
        // Step 5.A: Redirect to Bank Page if the condition will be true
        window.location.href = 'bank.html';
    }
    else {
        // Step 5.B: Show Alert when the condition will be false
        alert('You Email/Username or Password is Wrong. Try again.');
    }
})