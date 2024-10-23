// Get elements from DOM
const loanAmountInput = document.getElementById('loanAmount');
const interestRateInput = document.getElementById('interestRate');
const calculateButton = document.getElementById('calculateButton');
const tableBody = document.getElementById('tableBody');

// Add event listener to calculate button
calculateButton.addEventListener('click', calculateInterest);

// Function to calculate interest
function calculateInterest() {
  const loanAmount = parseFloat(loanAmountInput.value);
  const interestRate = parseFloat(interestRateInput.value);

  // Validate inputs
  if (isNaN(loanAmount) || isNaN(interestRate)) {
    alert('Please enter valid numbers for loan amount and interest rate.');
    return;
  }

  // Calculate interest
  const interest = loanAmount * (interestRate / 100);
  const roundedInterest = interest.toFixed(2);

  // Display results
  const row = tableBody.insertRow();
  const amountCell = row.insertCell(0);
  const rateCell = row.insertCell(1);
  const interestCell = row.insertCell(2);

  amountCell.innerHTML = loanAmount.toFixed(2);
  rateCell.innerHTML = interestRate.toFixed(3);
  interestCell.innerHTML = roundedInterest;
}