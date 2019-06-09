let input = prompt ("Bank Options: Enter the letter for the selected command: Q to Quit, W to Withdraw, D to Deposit, B to check balance. ");
let balance = 0.0;

const bankTasks = '';

function ATM(options) {
  switch (options) {
    case 'Q': {
      return Quit ();
      break;
    }
      case 'q': {
        return Quit ();
        break;
        }
    case 'W': {
      return Withdraw ();
      break;
    }
      case 'w': {
        return Withdraw ();

        break;
        }
    case 'D': {
      return Deposit ();
      break;
      }
      case 'd': {
        return Deposit ();
        break;
        }
    case 'B': {
      return Balance ();
      break;
      }
      defult: {
        return Quit ();
      }
    }
  }
  function Withdraw () {
   prompt ('How much would you like to take out?');
   return 'balance - Withdraw ('');
  }

  function Deposit () {
   prompt ('How much would you like to deposit?');
   return 'balance - Deposit ('')';
  }

  function Deposit () {
  prompt ('Here is your balance');
   return 'balance';
  }
console.log(
  ATM(bankTasks)
)
