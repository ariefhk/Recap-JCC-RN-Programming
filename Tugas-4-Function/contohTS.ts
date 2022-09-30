var operasikan = function (
	x: number,
	y: number,
	operasi: (a: number, b: number) => number,
) {
	var hasil = operasi(x, y);

	return "Hasil operasi dari " + x + " dan " + y + " adalah " + hasil;
};
