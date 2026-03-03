
    let balance = 100;
    const balanceDisplay = document.getElementById('balance');
    const message = document.getElementById('message');
    const historyList = document.getElementById('historyList');

    function updateBalanceDisplay() {
      balanceDisplay.textContent = balance;
    }

    function addToHistory(action, amount) {
      const li = document.createElement('li');
      const time = new Date().toLocaleTimeString();
      li.textContent = `${time}: ${action} ₹${amount}`;
      historyList.prepend(li);
    }

    function recharge() {
      const amount = parseFloat(document.getElementById('rechargeAmount').value);
      if (!amount || amount <= 0) {
        message.textContent = "Enter a valid recharge amount.";
        message.style.color = "red";
        return;
      }
      balance += amount;
      updateBalanceDisplay();
      message.textContent = `Recharged ₹${amount} successfully.`;
      message.style.color = "green";
      addToHistory("Recharged", amount);
      document.getElementById('rechargeAmount').value = "";
    }

    function travel() {
      const fare = parseFloat(document.getElementById('travelFare').value);
      if (!fare || fare <= 0) {
        message.textContent = "Enter a valid fare amount.";
        message.style.color = "red";
        return;
      }
      if (balance < fare) {
        message.textContent = "Insufficient balance for travel.";
        message.style.color = "red";
        return;
      }
      balance -= fare;
      updateBalanceDisplay();
      message.textContent = `Fare ₹${fare} deducted. Safe travel!`;
      message.style.color = "green";
      addToHistory("Travel Fare Deducted", fare);
      document.getElementById('travelFare').value = "";
    }
  