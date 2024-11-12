import Motorbike from "./Motorbike";
import Car from "./Car";
import Wheel from "./Wheel";

interface AbleToTow {
	tow(vehicle: Truck | Motorbike | Car): void;
}

class Vehicle {
	vin: string;
	color: string;
	make: string;
	model: string;
	year: number;
	weight: number;
	topSpeed: number;
	wheels: Wheel[];

	constructor(
		vin: string,
		color: string,
		make: string,
		model: string,
		year: number,
		weight: number,
		topSpeed: number,
		wheels: Wheel[]
	) {
		this.vin = vin;
		this.color = color;
		this.make = make;
		this.model = model;
		this.year = year;
		this.weight = weight;
		this.topSpeed = topSpeed;
		this.wheels = wheels;
	}

	printDetails(): void {
		console.log(`VIN: ${this.vin}`);
		console.log(`Make: ${this.make}`);
		console.log(`Model: ${this.model}`);
		console.log(`Year: ${this.year}`);
		console.log(`Weight: ${this.weight}`);
		console.log(`Top Speed: ${this.topSpeed}`);
		console.log(`Color: ${this.color}`);
	}
}

/*
class Wheel {
	diameter: number;

	constructor(diameter: number) {
		this.diameter = diameter;
	}
}
	*/

class Truck extends Vehicle implements AbleToTow {
	towingCapacity: number;

	constructor(
		vin: string,
		color: string,
		make: string,
		model: string,
		year: number,
		weight: number,
		topSpeed: number,
		wheels: Wheel[],
		towingCapacity: number
	) {
		// Call the parent Vehicle constructor
		super(vin, color, make, model, year, weight, topSpeed, wheels);

		// Ensure there are 4 wheels, create new Wheel objects if necessary
		if (wheels.length !== 4) {
			this.wheels = [
				new Wheel(18),
				new Wheel(18),
				new Wheel(18),
				new Wheel(18),
			];
		}

		// Set the truck's towing capacity
		this.towingCapacity = towingCapacity;
	}

	// Implement the tow method from the AbleToTow interface
	tow(vehicle: Truck | Motorbike | Car): void {
		// Get the make and model of the vehicle
		const vehicleMakeModel = `${vehicle.make} ${vehicle.model}`;

		// Check if the vehicle's weight is within the truck's towing capacity
		if (vehicle.weight <= this.towingCapacity) {
			console.log(`${this.make} ${this.model} is towing ${vehicleMakeModel}.`);
		} else {
			console.log(
				`${vehicleMakeModel} is too heavy to be towed by ${this.make} ${this.model}.`
			);
		}
	}

	// Override the printDetails method from the Vehicle class
	override printDetails(): void {
		// Call the parent class's printDetails method
		super.printDetails();

		// Log the truck-specific details
		console.log(`Towing Capacity: ${this.towingCapacity}`);
		console.log(
			`Wheels: ${this.wheels
				.map((wheel) => `Diameter: ${wheel.getDiameter}`)
				.join(", ")}`
		);
	}
}

// Export the Truck class as the default export
export default Truck;
