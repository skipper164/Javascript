const prompt = require("prompt-sync")();


let count = 0;
let point = 0;

while (true){  
let count2 = 0;

let number1 = Math.floor(Math.random() * 50);
let number2 = Math.floor(Math.random() * 50);

     
   if (number1 > number2){
	for(let loop=0; loop < 2; loop++){
		console.log(number1, "-", number2);
		let score = number1 - number2;
		input = prompt("input your answer ");
		if(input == score){
			point++;
			loop = 2;
		}		


	}
        


  count++;
	
} 



if (count == 10)break;
}
console.log("your score is: ", point);
