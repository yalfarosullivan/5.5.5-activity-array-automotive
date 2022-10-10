//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle

class Car extends VehicleModule {
    constructor (make, model, year, color, mileage){
    super(make, model, year, color, mileage);
    this.maxPassangers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxspeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
}


//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


