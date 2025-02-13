import Motorbike from "./Motorbike.js";
import Car from "./Car.js";
import Wheel from "./Wheel.js";
import AbleToTow from "../interfaces/AbleToTow.js";
import Vehicle from "./Vehicle.js";


class Truck extends Vehicle implements AbleToTow {
	vin: string;
	color: string;
	make: string;
	model: string;
	year: number;
	weight: number;
	topSpeed: number;
	wheels: Wheel[];
	towingCapacity: number

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
		super();
		this.vin = vin;
		this.color = color;
		this.make = make;
		this.model = model;
		this.year = year;
		this.weight = weight;
		this.topSpeed = topSpeed;

		// Ensure there are 4 wheels, create new Wheel objects if necessary
		if (wheels.length !== 4) {
			this.wheels = [
				new Wheel(),
				new Wheel(),
				new Wheel(),
				new Wheel(),
			];
		}
		else{
			this.wheels=wheels
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
