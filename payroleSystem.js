const prompt = require("prompt-sync")();

let payrole = {{employee_name:"null",
		number_of_hours: 1,
		hourly_payrate: 1,
		federal_tax_rate:1,
		state_tax_rate: "null"},
		{employee_name:2,
		number_of_hours:2,
		hourly_payrate:2,
		federal_tax_rate:2,
		state_tax_rate: "null"},
		{employee_name:3,
		number_of_hours:3,
		hourly_payrate:3,
		federal_tax_rate:3,
		state_tax_rate: "null"},
		{employee_name:4,
		number_of_hours:4,
		hourly_payrate:4,
		federal_tax_rate:4,
		state_tax_rate: 4}
		};


console.log("""
  1. add employee payroll
  2. view employee payroll
  3. update employee pay		
  4. exit
      """);


while (true){
	let add = 0;
	option = prompt("enter input (1-4): ");
	switch(option){
		case1:{while(true){
				payrole[add][0] = prompt("enter employee name: ");
				payrole[add][1] = prompt("enter number of hours workrd in a week: ");
				payrole[add][2] = prompt("enter hourly payrate: ");
				payrole[add][3] = prompt("enter federal tax witholding rate: ");  
				payrole[add][4] = prompt("enter state tax witholding rate: ");
				add+=1;
				if(add == 3)break;
				};
			};break; 
		case2:{for(let key in payrole) { console.log(payrole[key])}}




	}
		




}
