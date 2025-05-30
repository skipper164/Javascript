let atmCardNumber = [1,2,3,4,5,6,7,8,9,10,11];

function atmCard() {

let reply = 0;

 if (atmCardNumber.length == 16) {
   if (atmCardNumber[0] == 4) reply = console.log("valid: true, issuer: visa"); 
    if(atmCardNumber[0]== 5) reply = console.log("valid: true, issuer: mastercard");
    if(atmCardNumber[0]== 6) reply = console.log("valid: true, issuer: Discovery");
    else  reply = console.log("invalid: false, reason: invalid card type");



}

if (atmCardNumber.length == 15) {
if(atmCardNumber[0]== 3) reply = console.log("valid: true, issuer: American Express");

else reply = console.log("invalid: false, reason: invalid card type");




}


if (atmCardNumber.length > 16 ) reply = console.log("false: invalid length");
else reply = console.log("invalid: false, reason: invalid card length");





return reply;

}



(atmCard(atmCardNumber));

