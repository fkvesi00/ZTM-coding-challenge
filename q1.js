Question 1: Clean the room function: given an input of 
[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
make a function that organizes these into individual array that is ordered.
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should 
return [[1,2], ["2", "3"]]

const subStrings = arg =>{
	
	let newarg=[];
	let result=[];
	for(let i=0; i < arg.length+1 ;i++){
		if( arg[i] === arg[i-1]){
			newarg.push(arg[i])
		}else if(i===0){
			result.push(arg[i])
		}else{
			newarg.push(arg[i-1])
			result.push(newarg)
			newarg=[]
		}
	}
	return [result]

}
const arrayFromAbove = arr => {
	const numbers = arr.filter( el => typeof el === 'number').sort((a, b) => a - b)
	const chars = arr.filter( el => typeof el === 'string').sort((a, b) => a - b)

	const newNumbers = subStrings(numbers)
	const newChars = subStrings(chars)

	return [newNumbers,newChars] 
}
arrayFromAbove([1,2,4,591,392,391,2,5,10,2,'1','1','2','4',20,20])

