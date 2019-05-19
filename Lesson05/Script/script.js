const bankTasks = 'Q';

function ATM(options) {
  switch (options) {
    case 'Q': {
      return 'Quit Program';
      break;
    }
    case 'W': {
      return 'Withdrawl';
      break;
    }
    case 'D': {
      return 'Deposit';
      break;
    }
    case 'B': {
      return 'Balance';
      break;
    }
  }

console.log(
  ATM(bankTasks)
);
