let calculate = () => {
	const ageRet = Number(document.getElementById("retage").value);
	let age = Number(document.getElementById("age").value);
	let salary = Number(document.getElementById("salary").value);
	let PercentageSavings = Number(document.getElementById("savings").value);
	let raise = Number(document.getElementById("raise").value);
	let result = document.getElementById("result");
	let totalSavings = 0;
	for (age; age < ageRet; age++) {
		salary += Number(salary * (raise / 100));
		totalSavings += Number(salary * (PercentageSavings / 100));
	}
	result.innerHTML = "Total amount of savings is :" + Math.round(totalSavings) + "MAD";
};
