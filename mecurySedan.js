//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle

class Car extends VehicleModule {
    constructor (make, model, year, color, mileage){
    super(make, model, year, color, mileage);
    this.maxPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxspeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
}

checkService(){
    if(this.mileage > 3000){
        this.scheduleService = true
        return this.checkService;
    }
}

start() {
    if (this.fuel > 0){
        console.log("engine has started");
        return this.started = true
    } else { 
        console.log9("no fuel");
        return this.started= false;
    }
}

loadPassanger(num){
    if (this.passenger < this.maxPassenger) {
        if((number + this.passenger) <= this.maxPassenger) {
            this.passenger = num;
            return this.passenger;
        } else {
            console.log(this.model + " " + this.make + "not have enough space to take all passengers");
        }
    } else {
        console.log(this.model + " " + this.make + "is full");
    }
        }
    }


//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");

console.log(v.make)


