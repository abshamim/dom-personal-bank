// Step 1: Add event handelar to withdraw button
document.getElementById('withdraw-btn').addEventListener('click', () => {
    // Step 2: Get the withdraw input field's value
    const withdrawInputField = document.getElementById('withdraw-field');
    const withdrawInputStringValue = withdrawInputField.value;
    const withdrawInputAmount = parseFloat(withdrawInputStringValue);
    // Step 3: Clear the Withdraw input field
    withdrawInputField.value = '';
    // validation check
    if(isNaN(withdrawInputAmount)) {
        alert('This is an Invalid number. Please type a right number!');
        return;
    }
    // Step 3: Get the current Withdraw amount
    const withdrawCurrent = document.getElementById('current-withdraw-amount');
    const withdrawCurrentString = withdrawCurrent.innerText;
    const withdrawCurrentAmount = parseFloat(withdrawCurrentString);
    // Step 7: Get the Main Balance amount
    const balance = document.getElementById('main-balance');
    const balanceString = balance.innerText;
    const mainaBalance = parseFloat(balanceString);
    // Validation check
    if(withdrawInputAmount > mainaBalance) {
        alert('There is no Sufficient Balance. Try again!');
        return;
    }
    // Step 4: Set the total value to the Withdraw balance
    // Step 5: Make current balance of Withdraw string to number
    // Step 6: Make input value string to number
    withdrawCurrent.innerText = (withdrawCurrentAmount + withdrawInputAmount).toFixed(2);
    // Step 8: remove Withdraw amount from main balance
    balance.innerText = (mainaBalance - withdrawInputAmount).toFixed(2);
});
