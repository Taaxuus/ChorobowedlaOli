const bruttoInput = document.querySelector('#brutto-input');
const daysInput = document.querySelector('#sickdays-input');
const bruttoMsg = document.querySelector('.calculator_brutto-msg');
const sickdaysMsg = document.querySelector('.calculator_number-msg');
const sickDaysNumber = document.querySelector('.resultsick');

const countBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');

const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
const result3 = document.querySelector('.result3');

// podstawa wymiaru = zarobki brutto - ZUSspołeczne = 6000.00 PLN - (6000.00 PLN × 13.71%) = 5177.40 PLN

const resultNumber1 = () => {
	podstawaWymiaru = bruttoInput.value - bruttoInput.value * 0.1371;
	result1.textContent = `${podstawaWymiaru.toFixed(2)} zl `;
};

// wynagrodzenie za x dni choroby = wynagrodzenie za 1 dzień choroby × 14 = 138.06 PLN × x = 1932.84 PLN.

const resultNumber2 = () => {
	wynagrodzenieZaChoreDni = ((bruttoInput.value - bruttoInput.value * 0.1371) / 30) * daysInput.value;
	result2.textContent = `${wynagrodzenieZaChoreDni.toFixed(2)} zl`;
};

// Wynagrodzenie za przepracowaną część miesiąca

const resultNumber3 = () => {
	przepracowanaCzesc = (bruttoInput.value / 30) * (30 - daysInput.value);

	result3.textContent = `${przepracowanaCzesc.toFixed(2)} zl Brutto`;
};

// reset

const resetAll = () => {
	bruttoInput.value = '';
	daysInput.value = '';
	result1.textContent = '';
	result2.textContent = '';
	result3.textContent = '';
};

// GLOBAL

const globalFunction = () => {
	if (bruttoInput.value === '' || bruttoInput.value < 0) {
		bruttoMsg.textContent = 'Wpisz odpowiednia wartosc Brutto';
		result1.textContent = '';
		result2.textContent = '';
		result3.textContent = '';
	} else if (daysInput.value === '' || daysInput.value < 0 || daysInput.value > 30) {
		sickdaysMsg.textContent = ' Wpisz odpowiednia liczbe dni , maxymalna liczba to 30';
		result1.textContent = '';
		result2.textContent = '';
		result3.textContent = '';
	} else {
		resultNumber1();
		resultNumber2();
		resultNumber3();
		bruttoMsg.textContent = '';
		sickdaysMsg.textContent = '';
	}
};

countBtn.addEventListener('click', globalFunction);
// countBtn.addEventListener('click', resultNumber2);
// countBtn.addEventListener('click', resultNumber3);

resetBtn.addEventListener('click', resetAll);
