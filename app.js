const luhnsCheck = (cardNum) => {
	const even = [];
	let sumOdd = 0;

	for (let i = 0; i < cardNum.length; i++) {
		let current = parseInt(cardNum[i]);

		if (i % 2 !== 0) {
			sumOdd += current;
		} else {
			even.push(current);
		}
	}

	const sumEven = even.reduce((a, c) => {
		if ((c * 2) % 10 === c * 2) {
			return a + c * 2;
		} else {
			return a + (c * 2 - 9);
		}
	}, 0);

	return (sumOdd + sumEven) % 10 === 0;
};

const generateValidCardNumbers = (n = 100) => {
	const validCardNumbers = [];

	for (let i = 0; i < n; i++) {
		let generatedCard = '';
		for (let i = 0; i < 16; i++) {
			generatedCard += Math.floor(Math.random() * 10);
		}
		if (luhnsCheck(generatedCard)) {
			validCardNumbers.push(generatedCard);
		}
	}

	console.log(
		`Out of ${n} trials => ${validCardNumbers.length} valid cards are generated`
	);

	return validCardNumbers;
};

console.log(generateValidCardNumbers(100));
