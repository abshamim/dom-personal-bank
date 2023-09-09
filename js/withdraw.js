// Step 1: Add event handelar to withdraw button
document.getElementById('withdraw-btn').addEventListener('click', () => {
    // get withdraw input amount using function
    const withdrawInputAmount = getInputValueUsingId('withdraw-field');
    // check NaN validation
    if(isNaN(withdrawInputAmount)) {
        alert('Invalid Number. Please Type Valid Number!');
        return;
    }
    // get current withdraw amount using function
    const currentWithdrawAmount = getTextValueUsingId('current-withdraw-amount');
    // get main balance amount using function
    const currentMainBalance = getTextValueUsingId('main-balance');
    // validity check
    if(withdrawInputAmount > currentMainBalance) {
        alert('Not enough money.')
        return;
    }
    // calculate withdraw input value and current balance
    const newWithdrawTotal = (currentWithdrawAmount + withdrawInputAmount).toFixed(2);
    // set new withdraw total to withdraw text 
    setTextTotalBalance('current-withdraw-amount', newWithdrawTotal);
    // calculate new deposite and main balance
    const setNewMainBalance = (currentMainBalance - withdrawInputAmount).toFixed(2);
    // set total of deposit and main balance to balance text using function
    setTextTotalBalance('main-balance', setNewMainBalance);
});
