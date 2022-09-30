function playWerewolf(nama, peran) {
	if (!nama) {
		console.log("Nama harus diisi!");
	} else if (nama && !peran) {
		console.log("Halo " + nama + ", Pilih Peranmu untuk memulai game");
	} else if (nama && peran === "Penyihir") {
		console.log(
			"Selamat datang di Dunia Werewolf, " +
				nama +
				"\nHalo Penyihir " +
				nama +
				", kamu dapat melihat siapa yang menjadi werewolf!",
		);
	} else if (nama && peran === "Guard") {
		console.log(
			"Selamat datang di Dunia Werewolf, " +
				nama +
				"\nHalo Guard " +
				nama +
				", kamu akan membantu melindungi temanmu dari serangan werewolf.",
		);
	} else if (nama && peran === "Werewolf") {
		console.log(
			"Selamat datang di Dunia Werewolf, " +
				nama +
				"\nHalo Werewolf " +
				nama +
				", Kamu akan memakan mangsa setiap malam!",
		);
	}
}

module.exports = playWerewolf;
