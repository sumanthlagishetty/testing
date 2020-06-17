// const laptops = ['Dell', 'Hp', 'Apple', 'Lenovo', 'Sony']
// console.log(laptops)
// console.log(laptops[0]);
// console.log(laptops[4]);
// console.log(laptops.length);
// console.log(laptops.length-5);
// console.log(laptops[laptops.length-1])
// console.log(`we have ${laptops[laptops.length-1]}`)



const numbers = ['one', 'two', 'three', 'four', 'five', 'six']
// numbers[1]='cnu'
// numbers[0]='sumanth'
// numbers[2]='shiva'
// numbers[3]='sri'
// numbers[4]='rajesh'
// numbers[5]='amar'
// console.log(numbers)

//start
//shift and unshift is method

// console.log(numbers.shift())
// console.log(numbers);

// numbers.unshift('New')
// console.log(numbers)

//end

//numbers.pop()

// pop will delete a last number
// console.log('the number is deleted'+ ':' +(numbers.pop()) )
// console.log(numbers)

// push will insert a number
numbers.push('seven')
console.log(numbers)

//middle

numbers.splice(2, 3, 'somthing new')
console.log(numbers);
