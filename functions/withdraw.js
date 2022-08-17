const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", () => {
    const newWithdrawAmount = getInputValue("withdraw");
    const previousWithdrawTotal = getElementValue("withdraw-total");
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValue("withdraw-total", newWithdrawTotal)

    const previousTotalBalance = getElementValue("total-balance");
    const newTotalBalance = previousTotalBalance - newWithdrawAmount;
    setTextElementValue("total-balance", newTotalBalance)
})