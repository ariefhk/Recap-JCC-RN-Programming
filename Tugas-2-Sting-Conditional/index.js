// var name = "John"; // Tipe
// var angka = 12;
// var todayIsFriday = false;

// console.log("name"); // "John"
// console.log(angka); // 12
// console.log(todayIsFriday); // false

// Operator Aritmatika
// var a = 10;
// var b = 20;

// var hasil = a + b;
// console.log(hasil);
// console.log(a + b);

// Modulus
// var angka = 10;

// const sisaMod = angka % 2;

// console.log(sisaMod);

// const isEven = angka % 2 === 0;
// console.log({ isEven });

// // Operasei String
// var kata1 = "70".toLowerCase();
// var kata2 = "100";

// var kata3 = kata1 + kata2;
// console.log(kata3);

// var a = 10.toLowerCase();
// var b = 20;

// var hasil = a + b;
// console.log(hasil);

// var gabungan = kata1 + a;
// console.log(gabungan);

// var sentences = "Javascript";
// console.log(sentences[0]); // "J"
// console.log(sentences[2]); // "v"

// console.log(sentences.length);
// console.log("Jabar Coding Camp".length);

// // Concat
// var string1 = "gOOd";
// var string2 = "luck";
// var string3 = "JCC";

// console.log(string2.concat(string1).concat(" ").concat(string3)); // goodluckJCC
// console.log(string1 + " " + string2 + string3);
// // console.log("goodluck".concat(string3)); // goodluck

// var hasil = string3.concat("Jabar");
// console.log(hasil);
// console.log(typeof hasil);

// console.log(string1.toUpperCase());
// console.log(string1.toLowerCase());

// var car1 = "Lykan Hypersport";
// var car2 = car1.substr(6, 5);
// var car3 = car1.substring(6, 11);

// console.log(car2); // Hypersport
// console.log(car3);

// var int = 12;
// var real = 3.45;
// var arr = [6, 7, 8];

// var strInt = String(int);
// var strReal = String(real);
// var strArr = String(arr);

// console.log(strInt); // '12'
// console.log(int);

// console.log(strReal); // '3.45'
// console.log(real);

// console.log(strArr); // '6,7,8'
// console.log(arr);

// var unDefined;
// var number1 = Number("90"); // number1 = 90
// var number2 = Number("1.23"); // number2 = 1.23
// var number3 = Number("4 5"); // number3 = NaN

// console.log(number1);
// console.log(number2);
// console.log(number3);
// console.log(unDefined);
// console.log(unDefined + 90);

// console.log("car".concat("hal0", " ", "world"));
// console.log("car" + " " + "hal0" + " " + "world");

// console.log(
// 	word.concat(
// 		spasi,
// 		second,
// 		spasi,
// 		third,
// 		spasi,
// 		fourth,
// 		spasi,
// 		fifth,
// 		spasi,
// 		sixth,
// 		spasi,
// 		seventh,
// 	),
// );

// console.log("Hari", "Selasa");
// var hasil = "Hari" + " " + "Selasa";
// console.log({ hasil });

// var hasil;
// var ratarata;
// var luas;
// var l;
// var t;

// var hariJumat; // camelCase u/ nama variable
// var KomponenKucing; // PascalCase u/ nama komponen atau class

// var mood = "blue";

// if (mood === "happy") {
// 	console.log("hari ini aku bahagia!");
// } else if (mood === "unhappy") {
// 	console.log("hari ini aku tidak bahagia!");
// } else {
// 	console.log("hari ini aku sedang random");
// }

// var isRain = true;
// var isCold = false;

// if (isRain && isCold) {
// 	console.log("Saya bawa payung dan memakai jaket");
// } else {
// 	console.log("Saya tidak bawa payung dan memakai jaket");
// }

// var minimarketStatus = "open";
// var telur = "soldout";
// var buah = "soldout";

// if (minimarketStatus == "open") {
// 	console.log("saya akan membeli telur dan buah");
// 	if (telur == "soldout" || buah == "soldout") {
// 		console.log("belanjaan saya tidak lengkap");
// 	} else if (telur == "soldout") {
// 		console.log("telur habis");
// 	} else if (buah == "soldout") {
// 		console.log("buah habis");
// 	}
// } else {
// 	console.log("minimarket tutup, saya pulang lagi");
// }

// var mood;

// if (!mood?.trim()) {
// 	// When the variable has a falsy value the condition is true.
// 	console.log("Mood is empty");
// }

// if (mood.toLowerCase() === "happy") {
// 	console.log("hari ini aku bahagia!");
// } else if (mood === "unhappy") {
// 	console.log("hari ini aku tidak bahagia!");
// } else {
// 	console.log("hari ini aku sedang random");
// }

var buttonPushed = 10;
switch (buttonPushed) {
	case 1: {
		console.log("matikan TV!");
		break;
	}
	case 2: {
		console.log("turunkan volume TV!");
		break;
	}
	case 3: {
		console.log("tingkatkan volume TV!");
		break;
	}
	case 4: {
		console.log("matikan suara TV!");
		break;
	}
	default: {
		console.log("Tidak terjadi apa-apa");
	}
}
