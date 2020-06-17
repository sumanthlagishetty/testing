
//using sample function

// const Arrow = function(name){
//     return `hey there ${name} !`
// }

// console.log(Arrow('sumanth'));


// using Arrow Function


const uname = (name) => `hello ${name}`

console.log(uname('sumanth'));


const laptops =  [{
    title:'Dell',
    isDone:true,
}, {
    title:'Hp',
    isDone:true,
}, {
    title:'Apple',
    isDone:true,
}, {
    title:'Sony',
    isDone:false,
}, {
    title:'Lenova',
    isDone:false
}, {
    title:'thosiba',
    isDone:false
}]


const lap = (laps, title) => { const index = laps.find(function(todo, index){
    //console.log(laps);
    
     return todo.title.toLowerCase() === title.toLowerCase()
    }) 
       return index
    }

const lap2 = laptops.filter(lap2 => lap2.isDone == true)
console.log(lap2);


const lap1 = laptops.filter(laps1 => laps1.isDone === false)
console.log(lap1);


let printme = lap(laptops, 'Apple')
console.log(printme);

// using Arrow keyword function
// const camera = {
//     price:6000,
//     weight:2000,
//     mydes : function () {
//         return `the sony camera price is ${this.price}`
//     }
// }

// console.log(camera.mydes());
