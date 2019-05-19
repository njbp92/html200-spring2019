let input = prompt ("Bank Options: Enter the letter for the selected command: Q to Quit, W to Withdraw, D to Deposit, B to check balance. ");


const bankTasks = '';

function ATM(options) {
  switch (options) {
    case 'Q': {
      return 'Are you sure you want to quit?';
      break;
      }
    case 'W': {
      return 'How much would you like to take out?';
      break;
      }
    case 'D': {
      return 'Enter the amount of the deposit';
      break;
      }
    case 'B': {
      return 'Balance is...';
      break;
      }
    }
  }

console.log(
  ATM(bankTasks)
);
