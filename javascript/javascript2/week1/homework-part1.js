
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateCars(numberOfCars) {
    const cars = [];

    const carMakes =  ['Honda', 'BMW','Fiat','Skoda','Volvo','Audi','kia','Toyota','Tesla','Benz'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }
   
   // console.log(cars);
   //1.1
 const chkSpeed= cars.filter(function(spd)
    
{
   
    return (spd.speed >30) && (spd.speed < 60);
    
});
console.log(chkSpeed);
//1.2
const chkLight= cars.filter(function(light)
    
{
   //if((light.color!="lightyellow"))
    return (light.color!="lightyellow");
    
});
console.log(chkLight);

//1.3
let newarray = cars.map(obj =>{ 
    let newLanguage = {};
    newLanguage["maerke"] = obj.make;
    newLanguage["fart"] = obj.speed;
    newLanguage["farve"] = obj.color;
    return newLanguage;
 });
 console.log(newarray);
return cars;
    
}
console.log(generateCars(10));







