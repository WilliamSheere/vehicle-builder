// Import the necessary classes
import Truck from "./classes/Truck.js";
import Motorbike from "./classes/Motorbike.js";
import Car from "./classes/Car.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

const vehicles = [];
// Create a new Truck
const myTruck = new Truck(
	"1A2B3C4D5E6F",
	"Red",
	"Ford",
	"F-150",
	2024,
	5000,
	120,
	[],
	8000
);


// Create a Motorbike and a Car
const myMotorbike = new Motorbike(
	"2X3Y4Z5A6B7C",
	"Blue",
	"Yamaha",
	"YZF-R3",
	2022,
	350,
	180,
	[new Wheel(15), new Wheel(15)],
	//300
);
const myCar = new Car(
	"3Y4Z5A6B7C8D",
	"Black",
	"Toyota",
	"Corolla",
	2023,
	1500,
	180,
	[new Wheel(16), new Wheel(16), new Wheel(16), new Wheel(16)],
	//1000
);

// Test towing functionality
// myTruck.tow(myMotorbike); // This should be towed because the weight is within the capacity
// myTruck.tow(myCar); // This should not be towed because the weight exceeds the towing capacity

// // Print truck details
// myTruck.printDetails();

vehicles.push(myTruck);
vehicles.push(myCar);
// TODO: uncomment once motorbikes are implemented
vehicles.push(myMotorbike);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();
