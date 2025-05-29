let left_operand = 8, right_operand = 10, operator = "+";
let ans
switch(operator){
  case "+": { ans = left_operand + right_operand;
       console.log(ans)};
	break;
  case 2: { ans = left_operand - right_operand;
       console.log(ans)};
	break;
 case 3: { ans = left_operand * right_operand;
       console.log(ans)};
	break;
 case 4: { ans = left_operand / right_operand;
       console.log(ans)};
	break;
 default: console.log("NaN ");


}