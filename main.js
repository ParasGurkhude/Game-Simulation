// Vehicle constructor function
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

// Adding methods to the Vehicle prototype
Vehicle.prototype.accelerate = function(acceleration) {
    this.speed += acceleration;
    console.log("Vehicle is accelerating. Current speed:", this.speed);
};

Vehicle.prototype.brake = function(deceleration) {
    this.speed -= deceleration;
    if (this.speed < 0) {
        this.speed = 0;
    }
    console.log("Vehicle is braking. Current speed:", this.speed);
};

Vehicle.prototype.refuel = function() {
    console.log("Vehicle is refueling...");
};

// Car constructor function inheriting from Vehicle
function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
}

// Inherit Vehicle methods
Car.prototype = Object.create(Vehicle.prototype);

// Adding additional method to Car prototype
Car.prototype.honk = function() {
    console.log("Honk! Honk!");
};

// Example usage
var myCar = new Car('Toyota', 'Camry', 0, 'Gasoline', 4);
console.log(myCar);

myCar.accelerate(30); // Vehicle is accelerating. Current speed: 30
myCar.brake(10);      // Vehicle is braking. Current speed: 20
myCar.refuel();       // Vehicle is refueling...
myCar.honk();         // Honk! Honk!


//-------------------------------------------------------------

// Airplane constructor function inheriting from Vehicle
function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
}

// Inherit Vehicle methods
Airplane.prototype = Object.create(Vehicle.prototype);

// Adding additional method to Airplane prototype
Airplane.prototype.takeOff = function() {
    console.log("Airplane is taking off...");
};

// Example usage
var myAirplane = new Airplane('Boeing', '747', 0, 'Jet Fuel', 4, true);
console.log(myAirplane);

myAirplane.accelerate(300); // Vehicle is accelerating. Current speed: 300
myAirplane.brake(50);       // Vehicle is braking. Current speed: 250
myAirplane.refuel();        // Vehicle is refueling...
myAirplane.takeOff();       // Airplane is taking off...
