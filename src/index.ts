// Import the necessary classes
import Truck from "./classes/Truck";
import Motorbike from "./classes/Motorbike";
import Car from "./classes/Car";
import Wheel from "./classes/Wheel";

// Create a new Truck
const myTruck = new Truck(
	"1A2B3C4D5E6F",
	"Red",
	"Ford",
	"F-150",
	2024,
	5000,
	120,
	[new Wheel(18), new Wheel(18), new Wheel(18), new Wheel(18)],
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
myTruck.tow(myMotorbike); // This should be towed because the weight is within the capacity
myTruck.tow(myCar); // This should not be towed because the weight exceeds the towing capacity

// Print truck details
myTruck.printDetails();
