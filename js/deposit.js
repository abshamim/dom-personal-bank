// Step 1: Add event handelar to deposit button
document.getElementById('deposit-btn').addEventListener('click', () => {
    // get deposit input value and stored to a variable using funtion
    const newDepositValue = getInputValueUsingId('deposit-field');
    // check NaN validity
    if(isNaN(newDepositValue)) {
        alert('Invalid Number. Please Type Valid Number!');
        return;
    }
    // get deposit current amount and store using function
    const currentDepositAmount = getTextValueUsingId('current-deposit-amount');
    // calculate total amount of deposit current and new amount 
    const setNewDepositValue = (currentDepositAmount + newDepositValue).toFixed(2);
    // set total amount to deposit balance using function
    setTextTotalBalance('current-deposit-amount', setNewDepositValue);
    // get current main balance amount using function
    const currentMainBalance = getTextValueUsingId('main-balance');
    // calculate new deposite and main balance
    const setNewMainBalance = (currentMainBalance + newDepositValue).toFixed(2);
    // set total of deposit and main balance to balance text using function
    setTextTotalBalance('main-balance', setNewMainBalance);
})