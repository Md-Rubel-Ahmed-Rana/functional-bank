const depositBtn = document.getElementById("deposit-btn");

depositBtn.addEventListener("click", () => {
    const newDepositValueAmount = getInputValue("deposit");
    const previousDeposit = getElementValue("deposit-total");
    const newDepositTotal = previousDeposit + newDepositValueAmount;
    setTextElementValue("deposit-total", newDepositTotal)

    const previousTotalBalance = getElementValue("total-balance");
    const newTotalBalance = previousTotalBalance + newDepositValueAmount;
    setTextElementValue("total-balance", newTotalBalance)
})