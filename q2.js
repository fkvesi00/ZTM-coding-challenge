Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, give the target number. 
For example: answer([1,2,3], 4) should return [1,3]

const findSum = (arr, sum) => {
	let target=0;
	let newArr = [];
	let result=[]
	arr.map((el,i) => {
		for(i;i<arr.length;i++){
			//debugger
			if(el + arr[i+1] === sum){
				newArr.push(el)
				newArr.push(arr[i+1])
				result.push(newArr)
				newArr=[]
				break;				
			}
		}
		return 0
	})
	return result
}

const arr= findSum([1,2,3],4)
const arr2 = findSum([1,4,2,5,7],9)