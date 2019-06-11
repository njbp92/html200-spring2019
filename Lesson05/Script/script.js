let input = prompt("Bank Options: Enter the letter for the selected command: Q to Quit, W to Withdraw, D to Deposit, B to check balance.");
let balance = 0.0;

function askUser() {
	input = prompt("Bank Options: Enter the letter for the selected command: Q to Quit, W to Withdraw, D to Deposit, B to check balance.");
}

do {
	switch (input) {
		case "Q":
			{
				Quit();
				break;
			}
		case "q":
			{
				Quit();
				break;
			}
		case "W":
			{
				Withdraw();
				break;
			}
		case "w":
			{
				Withdraw();
				break;
			}
		case "D":
			{
				Deposit();
				break;
			}
		case "d":
			{
				Deposit();
				break;
			}
		case "B":
			{
				Balance();
				break;
			}
		default:
			{
			alert('Please enter a valid option')
      input;
			}
  }
}

while (answer != 'Q');

function Balance() {
	alert(balance);
}

function Withdraw() {
	num = prompt('How much would you like to take out?');
	alert(balance - num);
}

function Deposit() {
	num = prompt('How much would you like to deposit?');
	alert(balance + num);
}

function Quit() {
	prompt('Are you sure you want to quit?');
}


console.log(ATM(bankTasks))
