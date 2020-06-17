let Modules = {
    days:'Monday',
    mettings: 0,
    meetdone: 0,
}
let addmettings = function(todo,  meet=0){
    todo.mettings=todo.mettings + meet
}

let meetdone = function(todo, meet=0){
    todo.meetdone = todo.meetdone + meet
}

let resetDay = function(todo){
    todo.mettings = 0
    todo.meetdone = 0
}

let summaryDay  = function(todo){
    let meetLeft = todo.mettings + todo.meetdone
    return `you have ${meetLeft} meetings today!`
}

addmettings(Modules, 3)

//addmettings(Modules, 2)


meetdone(Modules, 2)

console.log(Modules)

console.log(summaryDay(Modules));

