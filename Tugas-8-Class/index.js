// class Vechile {
// 	color = "red";

// 	constructor(brand) {
// 		const licenceNumber = "1000";

// 		this.wheels = 2;
// 		this.isDiesel = true;
// 		this._brand = brand;
// 		this.licenceNumber = licenceNumber;
// 	}

// 	get brand() {
// 		return this._brand.toUpperCase();
// 	}

// 	set brand(x) {
// 		this._brand = x[0].toUpperCase() + x.slice(1).toLowerCase();
// 	}

// 	present(x) {
// 		return `${x}, I have a ${this._brand}`;
// 	}

// 	greetings() {
// 		return this.present("Holaaa");
// 	}

// 	static hello() {
// 		return "Hello!!!";
// 	}
// }

// const myCar = new Vechile("Ford");
// console.log(myCar);
// console.log(myCar.present("Hello"));
// console.log(myCar.greetings());
// console.log(myCar.brand);

// console.log(Vechile.hello());
// console.log(myCar.hello());

// class MotorCycle extends Vechile {
// 	constructor() {
// 		super("Honda");
// 		this.model = "Vario";
// 		this.isDiesel = false;
// 		this.owner = {};
// 	}

// 	show() {
// 		return `${this.present("Hi")}, 'it is a ${this.model}'`;
// 	}
// }

// const myMotor = new MotorCycle();
// console.log(myMotor);
// console.log(myMotor.show());
// myMotor.owner = {
// 	firstName: "John",
// 	lastName: "Wick",
// };
// console.log(myMotor);

// console.log(myMotor.brand);
// myMotor.brand = "yamaHAAA";

// console.log(myMotor);

function Clock({ template }) {
	var timer;

	function render() {
		var date = new Date();

		var hours = date.getHours();
		if (hours < 10) hours = "0" + hours;

		var mins = date.getMinutes();
		if (mins < 10) mins = "0" + mins;

		var secs = date.getSeconds();
		if (secs < 10) secs = "0" + secs;

		var output = template
			.replace("h", hours)
			.replace("m", mins)
			.replace("s", secs);

		console.log(output);
	}

	this.stop = function () {
		clearInterval(timer);
	};

	this.start = function () {
		render();
		timer = setInterval(() => render(), 1000);
	};
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
