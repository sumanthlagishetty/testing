// const mobiles = ['Samsung A70', 'Samsung A50', 'Samsung  A20']

// console.log(mobiles[mobiles.indexOf('Samsung A70')]);


const mobiles = [ {
    title:'Samsung A70',
    isDone:false,
}, {
    title:'Samsung A50',
    isDone:false,
}, {
    title:'Samsung A20',
    isDone:true,
}]

// find index

// const index = mobiles.findIndex(function(cell, index){
//     console.log(cell);
    
//     return cell.title === 'Samsung A70'
// })

// console.log(index);


// second method using function

// const mob = function(cell, title){
//     const index = cell.findIndex(function(cells, index){
//         //console.log(cells);
//         return cells.title.toLowerCase() === title.toLowerCase()
        
//     })
//     return cell[index]
// }
// let printme = mob(mobiles,'samsung a20')
// console.log(printme);


// second methof using find()


const phone = function(mob, title){
    const index = mob.find(function(cell, index){
        return cell.title.toLowerCase() === title.toLowerCase()
    })
    return index
}

let printme = phone(mobiles, 'samsung a70', 'samsung a50', 'samsung a20')
console.log(printme);

