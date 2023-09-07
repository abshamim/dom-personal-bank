// Step 1: Add event handelar to deposit button
document.getElementById('deposit-btn').addEventListener('click', () => {
    // Step 2: Get the input field's value
    const depositInputField = document.getElementById('deposit-field');
    const depositStringAmount = depositInputField.value;
    const depositAmount = parseFloat(depositStringAmount);
    // Step 3: Clear the deposit input field
    depositInputField.value = '';
    // validation check
    if(isNaN(depositAmount)) {
        alert('This is an Invalid number. Please type a right number!');
        return;
    }
    // validation check
    if(depositAmount < 0) {
        alert('Not possible to deposit less than $1');
        return;
    }
    // Step 4: Get the current Deposit amount
    const depositCurrent = document.getElementById('current-deposit-amount');
    const depositStringCurrent = depositCurrent.innerText;
    const depositCurrentAmount = parseFloat(depositStringCurrent);
    // Step 5: Get the Main Balance amount
    const balance = document.getElementById('main-balance');
    const balanceString = balance.innerText;
    const mainBalance = parseFloat(balanceString);
    // Step 6: Add the total value to the deposit balance
    depositCurrent.innerText = (depositCurrentAmount + depositAmount).toFixed(2);
    // Step 7: Add deposit amount to main balance
    balance.innerText = (mainBalance + depositAmount).toFixed(2);
})