// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = (drivers) => drivers.slice(-2)
console.log(returnLastTwoDrivers(drivers));

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(i){
    return multiplier = fare => fare * i;   
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func){
    return func(drivers);
}