let array = [2,3,4,5,6];

let obj = {
    color: "blue",
    age: 12,
    isvalid: true	

};

//for (let i = 0; i < array.length, i++){
//	console.log(array[i])
//or

for (let index of array){
	console.log(array[index])

};

for(let key in obj) {
 console.log(obj[key])
};


