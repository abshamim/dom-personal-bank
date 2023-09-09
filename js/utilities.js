// a function for getting value from input
function getInputValueUsingId (inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    inputField.value = '';

    return inputValue;
}
// a function for getting value from text
function getTextValueUsingId (textId) {
    const textAmountId = document.getElementById(textId);
    const textAmountString = textAmountId.innerText;
    const textAmount = parseFloat(textAmountString);
    return textAmount;
}
// set text value total using function
function setTextTotalBalance (elementId, newTotal) {
    const TextElementId = document.getElementById(elementId);
    TextElementId.innerText = newTotal;
}