console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTickets = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve('ticket');
    },3000)
});

const getPopcorn = promiseWifeBringingTickets.then((t) =>{
    console.log('wife: i have the tics');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject)=> resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');
    return new Promise((resolve, reject)=> resolve(`${t} butter`));
});

const getColdDrinks = getButter.then((t) => {
    console.log('wife: i need the coldDrink');
    console.log('husband: ok i will get one');
    console.log('wife: ok come as soon as possible');
    return new Promise((resolve, reject)=> resolve(`${t} coldDrink`));
});

getButter.then((t) => console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
