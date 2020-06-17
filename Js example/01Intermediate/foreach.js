let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July','Aug','Sept','Oct', 'Nov','Dec']


//Starting jan to July
// for(let i = 0; i<months.length; i++){
//     console.log(months[i])
// }

//reverse string

// for(let i = months.length-1; i >= 0; i--){
//     console.log(months[i])
// }

/// using forEach program

months.forEach(function(month, i){
    console.log(`starts with ${i+1} -- ${month}`);
    
})
