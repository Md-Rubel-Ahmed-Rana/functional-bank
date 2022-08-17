

const getInputValue = (inputId) => {
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
   

    if (isNaN(inputValueString)) {
        alert("Please provide a valid number");
        inputField.value = "";
        return 0;
    } else{
        const inputValue = parseFloat(inputValueString);
        inputField.value = "";
        return inputValue
    }
}

const getElementValue = (elementId) => {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);

    return elementValue;
}

const setTextElementValue = (elementId, newValue) => {
    const depositElement = document.getElementById(elementId);
    depositElement.innerText = newValue;
}

