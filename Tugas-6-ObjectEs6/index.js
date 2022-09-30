// var index = 1;
// var namaKey = "color";

// var car = {
// 	brand: "Ferrari",
// 	price: 50000,
// 	["horse power"]: 986,
// 	[index + namaKey]: "Red500",
// 	kickDown: function () {
// 		console.log("Vrrom Vroom!!");
// 		console.log("I have a", this.brand);

// 		return 100;
// 	},
// 	tambahkan: function (a, b) {
// 		return a + b;
// 	},
// 	owner: {
// 		firstName: "John",
// 		lasName: "Wick",
// 	},
// };

// // var kickDown = car.kickDown;
// // console.log(kickDown);
// console.log(car);
// car.brand = "Ford";
// console.log(car);
// console.log(car.kickDown());
// console.log(car.tambahkan(10, 7));

// car.wheels = 4;
// car.bodyKit = "Rocket Bunny";
// car["Ride Height"] = 10;

// console.log(car);

// // car["Damping Ratio"] = 100;
// // console.log(car.spoiler?.brand);
// car["Ride Height"] = {
// 	front: 10,
// 	back: 5,
// };
// console.log(car);

// var avengers = {
// 	"1. Bruce Banner": {
// 		firstName: "Bruce",
// 		lastName: "Banner",
// 		gender: "male",
// 		age: 45,
// 	},
// 	"2. Natasha Romanoff": {
// 		firstName: "Natasha",
// 		lastName: "Romanoff",
// 		gender: "female",
// 		age: "Invalid Birth Year",
// 	},
// };

// console.log(avengers);

// let nama = "hilmy";
// {
// 	let nama = "firdaus";
// 	console.log(nama);
// }

// console.log(nama);

// const person = {
// 	id: 1,
// 	name: "hilmy",
// };
// console.log(person);

// // person = {
// // 	id: 2,
// // 	name: "ahmad",
// // };
// person.name = "Firdaus";
// console.log(person);

// var jumlahkanBiasa = function (a, b) {
// 	return {
// 		a,
// 		b,
// 		hasil: a + b,
// 	};
// };

// var jumlahkanArrow = (a, b) => ({
// 	a,
// 	b,
// 	hasil: a + b,
// });

// console.log(jumlahkanBiasa(10, 7));
// console.log(jumlahkanArrow(10, 7));

// const arr1 = [0, 2, 4, 6];
// const arr2 = [1, 3, 5, 7];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// const car1 = {
// 	brand: "Ford",
// 	hp: 100,
// };

// const car2 = {
// 	brand: "Ferrari",
// 	color: "Red",
// };

// const car3 = {
// 	...car1,
// 	...car2,
// 	color: "blue",
// };

// console.log(car3);

// const name = "";

// const member = {
// 	name: "hilmy",
// 	umur: 26,
// 	lastName: "Firdaus",
// 	origin: "Indonesia",
// };

// const { name: memberName, ...restMember } = member;

// console.log(memberName);
// console.log(member.name);
// console.log(member.umur);
// console.log(restMember);

// const arr = ["satu", "dua", "tiga", 4, 5, 6, 7, 8];

// const [first, , third, ...restArr] = arr;
// console.log(first, third);
// console.log(restArr);

// for (const key in member) {
// 	if (Object.hasOwnProperty.call(member, key)) {
// 		const element = member[key];
// 		console.log(`${key} : ${element}`);
// 	}
// }

const tambahkan = (a, b, ...params) => {
	console.log({
		a,
		b,
		params,
	});
};

tambahkan(1, 2, 3, 4, 5, 6);
