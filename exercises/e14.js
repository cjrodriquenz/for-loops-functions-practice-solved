// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const incorrectBalance = [];
  for (let i = 0; i < array.length; i++) {
    let sumDeposits = 0;
    if (array[i].deposits) {
      for (let j = 0; j < array[i].deposits.length; ) {
        sumDeposits += array[i].deposits[j];
      }
    }
    let sumWithdrawals = 0;
    if (array[i].withdrawals) {
      for (let k = 0; k < array[i].withdrawals.length; k++) {
        sumWithdrawals += array[i].withdrawals[k];
      }
    }
    const expectedBalance = sumDeposits - sumWithdrawals;
    if (expectedBalance !== array[i].balance) {
      incorrectBalance.push(array[i]);
    }
  }
  return incorrectBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
