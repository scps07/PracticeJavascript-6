
const Bookings = [];
const seatBooking = function(
    filight,
    numPassenger = 1,
    price = 25 * numPassenger

){
    const Booking = {
        filight,
        numPassenger,
        price
    }
    console.log(Booking);
    Bookings.push(Booking);
    console.log(Bookings)
};
// seatBooking('Lh34',25)
const flightName = 'Lh254';
const samour = {
    fullName:'samour chandra',
    passPort:316184316,
}
function cheakin(fname,info){
    fname = 'Fh433';
    info.fullName = 'samour chandra' + ' paul';
    if(info.passPort === 316184316) alert('cheaced in')
        else alert('Worng password');

}

function changePass (pass){
    pass.passPort = Math.trunc(Math.random()*214588755)
}
// changePass(samour);
// cheakin(flightName,samour);
// console.log(flightName,samour);

const greet = function(someThing){
    return function (name){
        console.log(`${someThing}${name}`)
    }
}
const greeding = greet('Hey');
// greeding('samour');
// greeding('Rohim');

const hey = s => sa =>  console.log(`${s}${sa}`);
const fun = hey('hello');
const sent = function (mas){
    return function(mass){
        console.log(`${mas}${mass}`)
    }
}

const EnaLimited= {
    Name:'ENA KUAKATA LIMITED',
    BusIdno:'0078572',
    Buslogo:'KU',
    Bookings:[],
    booking(CusName,tiketID){
        console.log(`Your order has confrom . Your bus name ${CusName} is ${this.Name} and bus id is ${this.Buslogo}-${this.BusIdno}`)
        this.Bookings.push({Passenger:`${CusName} ${this.Name} ${this.Buslogo}-${this.BusIdno} ticket no is : ${tiketID}`})
    },

}
EnaLimited.booking('Samour',5454);
EnaLimited.booking('Sreedam',6454);


const booking = EnaLimited.booking;

const EnaPari = {
    Name:'ENA GULISTAN LIMITED',
    BusIdno:'0575452',
    Buslogo:'GU',
    Bookings:[],
}
// use the call method 
booking.call(EnaPari,'Gopal bhar',5445)
console.log(EnaPari.Bookings)
function hel (k=1,j=2){
   console.log(`${k}`)
}

// use the apply method

const cusData = ["samout",54452];
// booking.apply(EnaPari,cusData);
// booking.call(EnaPari,'sam',52);

// use call method is better then apply

booking.call(EnaLimited,...cusData);
// use bind method for point this Everytime

const EnaGu = booking.bind(EnaPari,'karacora'); 

// EnaGu(454);
// EnaGu(45412)
// console.log(EnaPari.Bookings);
EnaLimited.Pline = 300;
EnaLimited.BuyP = function(){
    this.Pline ++
    console.log(this);
    console.log(this.Pline);
}
document.querySelector('.buy').addEventListener('click',EnaLimited.BuyP.bind(EnaLimited));

const addTax = (rate,value) => value + value * rate;
// use bind method in function for set value
const tax = addTax.bind(null,0.1);
console.log(tax(200));

const val = (rate) => {
    return function(value){
        return value + value * rate;
    }
};

const v = val(0.1);
console.log(v(200));