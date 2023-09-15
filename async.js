console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async() => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) =>{
        setTimeout(() => reject('ticket'),3000);
    });
    // const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`));
    // const getButter = new Promise((resolve, reject)=> resolve(`butter`));
    // const getColdDrinks = new Promise((resolve, reject)=> resolve(`coldDrink`));
    let ticket
    try {
        ticket = await promiseWifeBringingTickets;
    }catch(e){
        ticket = 'sad face';
    }

        // console.log(`wife: i have the ${ticket}`);
        // console.log('husband: we should go in');
        // console.log('wife: no i am hungry');

        // let popcorn = await getPopcorn;

        // console.log(`husband: i got some ${popcorn}`);
        // console.log('husband: we should go in');
        // console.log('wife: I need butter on my popcorn');

        // let butter = await addButter;

        // console.log(`husband: i got some ${butter} on popcorn`);
        // console.log(`husband: anything else darling?`);
        // console.log(`wife: lets go we are getting late`);
        // console.log(`husband: thank you for the reminder *grins*`);

        // let coldDrink = await getColdDrinks;

        // console.log(`wife: i need the ${coldDrink}`);
        // console.log('husband: ok i will get one');
        // console.log('wife: ok come as soon as possible');

        // let [popcorn,butter, coldDrink] = await Promise.all([getPopcorn,getButter,getColdDrinks]);
        // console.log(`${popcorn}, ${butter}, ${coldDrink}`);

        return ticket; 
}


preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');