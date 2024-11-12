

// Importing the Vehicle and Wheel classes
import Vehicle from "./Vehicle.js";
import Wheel from "./Wheel.js";

class Motorbike extends Vehicle {
	// Declare properties of the Motorbike class
	vin: string;
	color: string;
	make: string;
	model: string;
	year: number;
	weight: number;
	topSpeed: number;
	wheels: Wheel[];

	// Constructor that accepts the properties of the Motorbike class
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
		// Call the parent class constructor (Vehicle)
		super();

		// Initialize Object Proerties
		this.vin = vin;
		this.color = color;
		this.make = make;
		this.model = model;
		this.year = year;
		this.weight = weight;
		this.topSpeed = topSpeed;
		this.wheels = wheels;

		// Ensure there are exactly 2 wheels, create new Wheel objects if necessary
		if (wheels.length !== 2) {
			this.wheels = [new Wheel(17), new Wheel(17)]; // Default wheels with diameter 17
		}
	}

	// Implement the wheelie method
	wheelie(): void {
		console.log(`${this.make} ${this.model} is doing a wheelie!`);
	}

	// Override the printDetails method from the Vehicle class
	override printDetails(): void {
		// Call the parent class's printDetails method to log common vehicle details
		super.printDetails();

		// Log the motorbike-specific details
		console.log(
			`Wheels: ${this.wheels
				.map((wheel) => `Diameter: ${wheel.getDiameter}`)
				.join(", ")}`
		);
	}
}

// Export the Motorbike class as the default export
export default Motorbike;
