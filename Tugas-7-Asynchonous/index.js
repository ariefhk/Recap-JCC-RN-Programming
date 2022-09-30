// setTimeout(() => {
// 	console.log("Saya dijalankan belakangan");
// }, 3000);

// setTimeout(() => {
// 	console.log("Saya dijalankan 1");
// }, 1000);

// setTimeout(() => {
// 	console.log("Saya dijalankan 2");
// }, 1000);

// console.log("Saya dijalankan pertama");

// const periksaDokter = (nomorAntri, operasi) => {
// 	if (nomorAntri > 50) {
// 		operasi(false, nomorAntri);
// 	} else {
// 		operasi(true, nomorAntri);
// 	}
// };

// periksaDokter(65, (check, nomorAntri) => {
// 	if (check) {
// 		console.log("Sebentar lagi giliran saya");
// 		console.log("Sekarang nomor", nomorAntri);
// 	} else {
// 		console.log("saya jalan-jalan dulu");
// 		console.log("Sekarang nomor", nomorAntri);
// 	}
// });

// setTimeout(() => {
// 	console.log("Saya dijalankan 1");
// 	setTimeout(() => {
// 		console.log("Saya dijalankan 2");
// 		setTimeout(() => {
// 			console.log("Saya dijalankan 3");
// 			setTimeout(() => {
// 				console.log("Saya dijalankan 4");
// 			}, 3000);
// 		}, 3000);
// 	}, 3000);
// }, 3000);

// const willIGetNewPhone = ({ isMomHappy, id }) =>
// 	new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (isMomHappy) {
// 				const phone = {
// 					id,
// 					brand: "Samsung",
// 					color: "Black",
// 				};

// 				resolve(phone);
// 			} else {
// 				const reason = new Error("Mom is not happy");
// 				reject(reason);
// 			}
// 		}, 1000);
// 	});

// const runMe = () =>
// 	willIGetNewPhone({ id: 1, isMomHappy: true })
// 		.then((res) => {
// 			console.log(res);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});

// runMe();

// const runMe = async () => {
// 	try {
// 		let phone;
// 		let id = 0;
// 		phone = await willIGetNewPhone({
// 			id: id++,
// 			isMomHappy: true,
// 		});
// 		console.log(phone);

// 		phone = await willIGetNewPhone({
// 			id: id++,
// 			isMomHappy: false,
// 		});
// 		console.log(phone);

// 		phone = await willIGetNewPhone({
// 			id: id++,
// 			isMomHappy: true,
// 		});
// 		console.log(phone);
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

// runMe();

const greetings = (count) => {
	console.log("Hello World");
	if (count < 10) {
		greetings(++count);
	}
};

greetings(0);
