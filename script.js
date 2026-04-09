document.getElementById("onSubmit").onclick = function() {

    let username = document.getElementById('user').value;
    let daily_rate = Number(document.getElementById('rate').value);
    let days = Number(document.getElementById('days').value);

    let salary = daily_rate * days;
    let taxRate = 0;

    // Calculation method
    if (salary > 10000 && salary < 20000){
        taxRate = 0.05;
    } else if (salary >= 20000 && salary < 30000){
        taxRate = 0.10;
    } else {
        taxRate = 0;
    }

    let taxAmount = salary * taxRate;
    let finalSalary = salary - taxAmount;

    alert(
        "Employee Name: " + username +
        "\nDaily Rate: R" + daily_rate +
        "\nDays: " + days +
        "\n" +
        "\nSalary: " + salary + 
        "\nTax: R" + taxAmount +
        "\nFinal Salary: R" + finalSalary
    );
};
