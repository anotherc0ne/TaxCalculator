function range(start, end) {
    const ans = [ ];
    for (let i = start; i <= end; i++) {
    ans.push(i);
    }
    return ans;
}

const taxBracketZero = range(1, 18201);
const taxBracketOne = range(18201, 45001);
const taxBracketTwo = range(45001, 120001);
const taxBracketThree = range(120001, 180001);
const taxBracketFour = range(180001, 1000000)

function calculateTax() {
    let income = document.getElementById("income").value;
    let deductions = document.getElementById("deductions").value;
    let tax = income - deductions

    if (taxBracketZero.includes(tax)) {
        document.getElementById("result").innerHTML = "You do not pay any tax.";
    } else if (taxBracketOne.includes(tax)) {
        document.getElementById("result").innerHTML = "You will pay $0 tax on the first $18200 of your income, and 19 cents for each dollar over $18200.";
        let taxable_income = ((tax - 18200)*0.19);
        let medicare_levy = tax * 0.02;
        let total_tax = taxable_income + medicare_levy;
        document.getElementById("result1").innerHTML = "You will pay " + total_tax + " dollars in tax, including Medicare levy.";
        document.getElementById("result2").innerHTML = "Your Medicare levy is, in AUD: " + medicare_levy;
    } else if (taxBracketTwo.includes(tax)) {
        document.getElementById("result").innerHTML = "You will pay $5092 plus $0.325 for each $1 over $45000.";
        let taxable_income = ((5092) + ((tax - 45000)*0.325));
        let medicare_levy = tax * 0.02;
        let total_tax = taxable_income + medicare_levy;
        document.getElementById("result1").innerHTML = "You will pay " + total_tax + " dollars in tax, including Medicare levy."
        document.getElementById("result2").innerHTML = "Your Medicare levy is, in AUD: " + medicare_levy;
    } else if (taxBracketThree.includes(tax)) {
        document.getElementById("result").innerHTML = "You will pay $29467 plus $0.37 for every dollar over 120000";
        let taxable_income = ((29467) + ((tax - 120000)*0.37));
        let medicare_levy = tax * 0.02;
        let total_tax = taxable_income + medicare_levy;
        document.getElementById("result1").innerHTML = "You will pay " + total_tax + " dollars in tax, including Medicare levy.";
        document.getElementById("result2").innerHTML = "Your Medicare levy is, in AUD: " + medicare_levy;
    } else if (taxBracketFour.includes(tax)) {
        document.getElementById("result").innerHTML = "You will pay $51667 plus $0.45 for each dollar over $180000.";
        let taxable_income = (51667) + ((tax - 180000)*0.45);
        let medicare_levy = tax * 0.02;
        let total_tax = taxable_income + medicare_levy;
        document.getElementById("result1").innerHTML = "You will pay " + total_tax + " dollars in tax, including Medicare levy.";
        document.getElementById("result2").innerHTML = "Your Medicare levy is, in AUD: " + medicare_levy;
    } else {
        document.getElementById("result").innerHTML = "You have too much money for this calculator. Good luck!"
    }

}