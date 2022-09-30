// // Mencetak Seluruh karakter
// var kalimat = "Jabar Coding Camp";

// // for (var i = 0; i < kalimat.length; i++) {
// // 	console.log(kalimat);
// // }

// function cetakKalimat(kalimat = "") {
// 	for (var i = 0; i < kalimat.length; i++) {
// 		console.log(kalimat);
// 	}
// }

// cetakKalimat(kalimat);

// function jumlahkan(a, b, c = 0, d = 0) {
// 	console.log({ a, b, c, d });

// 	return a + b + c + d;
// }

// console.log(jumlahkan(7, 10));
// console.log(jumlahkan(20, 1));

// function hello(a) {
// 	console.log("Hello World");

// 	return 10;
// }

// const hasil = hello(70);
// console.log(hasil);

// var a = 10;
// var b = 7;
// var hasil = 10000000;
// console.log({ hasil });

// function jumlahkan(x, y) {
// 	var hasil = "Hasil pemjumlahan " + (x + y);

// 	return hasil;
// }

// const jumlahkan = require("./index2");
// console.log(jumlahkan);

// console.log(jumlahkan(a, b));
// console.log({ hasil });

// var playWerewolf = require("./wereworlf");

// playWerewolf("Junaedi");
// playWerewolf("Rina", "Guard");
// playWerewolf("Rina", "Guard");
// playWerewolf("Rina", "Guard");

// var tambahkan = function (a, b) {
// 	return a + b;
// };
// // console.log(tambahkan(10, 7));

// // var add = tambahkan;
// // console.log(add(10, 7));
// var kalikan = function (a, b) {
// 	return a * b;
// };

// var operasikan = function (x, y, operasi) {
// 	var hasil = operasi(x, y);

// 	return "Hasil operasi dari " + x + " dan " + y + " adalah " + hasil;
// };

// var add = tambahkan;

// var a = 10;

// console.log(tambahkan(10, 7));
// console.log(add(10, 7));
// console.log(operasikan(10, 7, tambahkan));
// console.log(operasikan(10, 7, kalikan));

// a;

// Pure Function
// GAk ada side effect

var add = function (a, b) {
	hasil = a + b;

	return hasil;
};
