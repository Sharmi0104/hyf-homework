//Age-ify (A future age calculator)
const yearOfBirth =1983;
const yearFuture = 2055;
const age =yearFuture-yearOfBirth;
console.log("You will be " +age + "years old in " + yearFuture);

//Goodboy-Oldboy
const dogYearOfBirth =2002;
const dogYearFuture = 2055;
const shouldShowResultInDogYears= true;
let dogYear =dogYearFuture-dogYearOfBirth;
if(shouldShowResultInDogYears)
{
    console.log("Your dog will be " +dogYear + "human years " + yearFuture);
}
else
{
    dogYear *=7;
console.log("Your dog will be  " +dogYear + "human years " + yearFuture);
}

//Housey pricey (A house price estimator)
const peterHousevolumeInMeters =8*10*10;
const peterHouseGardenSize=100; 
const peterHouseCost = 2500000;

let peterHousePrice = peterHousevolumeInMeters * 2.5 * 1000 + peterHouseGardenSize * 300;
//console.log(peterHousePrice);
const juliaHousevolumeInMeters =5*11*8;
const juliaHouseGardenSize=70; 
const juliaHouseCost = 1000000;

let juliaHousePrice = juliaHousevolumeInMeters * 2.5 * 1000 + juliaHouseGardenSize * 300;
//console.log(juliaHousePrice);

let differencepeterHouseCost =peterHouseCost-peterHousePrice
console.log("Difference peter house cost: " +differencepeterHouseCost);

let differencejuliaHouseCost =juliaHousePrice-juliaHouseCost
console.log("Difference julia house cost: " +differencejuliaHouseCost);

if(differencepeterHouseCost>differencejuliaHouseCost)
{
console.log("Peter is paying More");
}
else
{
console.log("Julia is paying less");
}
//Ez Namey
let firstWords = ['Super', 'ebay', 'Network' , 'Tech', 'Speed', 'Customized', 'Unique', 'Glitter ', 'Logical','Entity'];

let secondWords = ['Restaurant','Corporation', 'Company' ,'Private limited','Courier' , 'PhotoShop', 'Spa','Beauty saloon', 'Software', 'Icecreame'];

for(i=0;i<firstWords.length;i++)
{
const  randomNumber = Math.floor(Math.random() * 10) + 0;
let startupName = firstWords[randomNumber] +" "+secondWords [randomNumber];
console.log("The startup name: " + startupName + " contains " + startupName.length + "characters.");
}
