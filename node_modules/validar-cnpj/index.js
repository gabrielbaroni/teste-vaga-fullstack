const isRepeatingNumber = (str) => /^(\d)(\1){13}$/.test(str);

const weights = [
	[5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
	[6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
];
/**
 * Valida um número de CNPJ baseado no algorítmo "módulo 11"
 * @param {String} input - Número de CNPJ a ser testado
 * @return {Boolean}
 * @example
 * const validarCnpj = require('validar-cnpj');
 * console.log(validarCnpj('12345678912345'));
 */
function validarCnpj(input) {
	if (typeof input !== 'string') {
		return false;
	}

	const cnpj = input.replace(/\D/g, '').trim();

	if (cnpj === '' || cnpj.length !== 14 || isRepeatingNumber(cnpj)) {
		return false;
	}

	for (let i = 0; i < 2; i++) {
		let sum = 0;

		for (let j = 0; j < weights[i].length; j++) {
			sum += parseInt(cnpj[j]) * weights[i][j];
		}

		sum %= 11;

		const checkDigit = sum < 2 ? 0 : 11 - sum;

		if (cnpj[12 + i] !== checkDigit.toString()) {
			return false;
		}
	}

	return true;
}

module.exports = validarCnpj;
