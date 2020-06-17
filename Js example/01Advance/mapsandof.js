var sumanth = {
    name:'sumanth',
    age:26,
    isActive:true,
}

var cnu = {
    name:'cnu',
    age:25,
    isActive:true,
}

var shiva = {
    name:'shiva',
    age:28,
    isActive:false,
}

let user = new Map()
//console.log(typeof user);

user.set('sumanth', sumanth)
user.set('cnu', cnu)
user.set('shiva', shiva)

//console.log(user);
//console.log(user.size);


//console.log(user.get('shiva'));

console.log(user.keys());

console.log(user.values());

for (const keys of user.keys()) {
    console.log(keys)    
}

for (const value of user.values()) {
    console.log(value.name)    
}

for (const [key, value] of user) {
    console.log(key + ' ' + value.name)
}

user.forEach((value, key) => console.log(key + ' ' + value.name))


var arrofArr = [['one', 1], ['two', 2], ['three', 3]]

console.log(arrofArr);

let newMap = new Map(arrofArr)
console.log(newMap);

console.log(newMap.keys());
console.log(newMap.values());

for (const key of newMap.keys()) {
    console.log(key);
    
    
}

for (const value of newMap.values()) {
    console.log(value);
        
}

for (const [key, value] of newMap.entries()) {
 console.log(key, value);
    
}


