// var arr = [0, 1, 2, 3, "empat", "lima", "enam", true, false, [7, 8]];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[arr.length - 1]);

// var arr = [0, 1, 2, 3];
// arr.push(4);
// console.log(arr);

// var newLenght = arr.push(5, 6, 7, [8, 9, 10]);
// console.log(arr);
// console.log(newLenght);

// arr.pop();
// console.log(arr);

// console.log(arr.slice(2, -2));

// var fruits = ["banana", "apple", "watermellon", "pineapple"];
// // fruits.splice(1, 1);
// // console.log(fruits);
// fruits.push("charmelleon");
// console.log(fruits);
// fruits.sort();
// console.log(fruits);
// fruits.splice(1, 2, "grape", "orange");
// console.log(fruits);

// var arr = [0, 1, 2, 3, 4, 5];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(2, -1));

// var arr = [
// 	0,
// 	1,
// 	2,
// 	3,
// 	"empat",
// 	"lima",
// 	"enam",
// 	true,
// 	false,
// 	[7, 8],
// 	[9, 10, [11, 12, 13]],
// ];
// console.log(arr);
// console.log(arr[4]);
// console.log(arr[4][2]);
// console.log(arr[arr.length - 1][1]);
// console.log(arr[arr.length - 1][2]);
// console.log(arr[arr.length - 1][2][1]);
// console.log(arr[arr.length - 2][2]?.[0]);

// var arr = [
// 	0,
// 	1,
// 	2,
// 	3,
// 	"empat",
// 	"lima",
// 	"enam",
// 	true,
// 	false,
// 	[7, 8],
// 	[9, 10, [11, 12, 13]],
// ];

// for (var i = 0; i < arr.length; i++) {
// 	const element = arr[i];
// 	console.log(element);
// }

// arr.forEach(function (value) {
// 	// console.log(value, "index-", index);
// 	console.log(value);
// });

// var nilai = [1, 2, 3, 4, 5];
// var nilaiKali2 = nilai.map(function (value) {
// 	if (value % 2 !== 0) {
// 		return value * 3;
// 	}

// 	return value * 2;
// });

// console.log(nilai);
// console.log(nilaiKali2);

// nilai.map(function (value) {
// 	return (value / 100) * 4;
// });

// Foreach
// Map
// Filter
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(
// 	arr.map(function (value) {
// 		if (value > 4) {
// 			return value;
// 		}
// 	}),
// );

console.log(
	arr.filter(function (value) {
		if (value % 3 === 0) {
			return false;
		}

		return true;
	}),
);

// Reduce
console.log(
	arr.reduce(function (sum, value) {
		return sum + value;
	}, ""),
);
