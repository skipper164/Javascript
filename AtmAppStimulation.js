const prompt = require("prompt-sync")();
console.log('welcome to semicolon bank ATM');

balance = prompt('enter your account ballance: ');


//let [] totalBalance = new int[20];
let count = 0;

let loop = 0;
while (true){
	let withdrawal = prompt("enter withdrawal ammount multiples of N500 or N1,000: ");
	
	//totalBalance[count] = withdrawal;



	if (withdrawal >= 500 && withdrawal % 10 == 0 && withdrawal >= withdrawal * 0.9  && balance - withdrawal > 100 && withdrawal < 20000){
		let charges = 100;
		count += 1;
		console.log("Transaction successful!");
		let newBalance =  balance - withdrawal - charges;
		
		console.log("withdrawal amount: N"+ withdrawal);
		console.log("withrawal fee: N"+ charges);
		console.log("Remaining balance: N"+ newBalance);
		console.log();

		balance = newBalance;
		}


	else console.log("invalid withdrawal amount");
	let loop = prompt("Do you want to make another withdrawal?  YES(0)/NO(1) or press (3) to view transactions: ");
	
		
	if(loop == 3)console.log("your transaction history is " + totalBalance);
	if(loop == 1)break;
	

}











