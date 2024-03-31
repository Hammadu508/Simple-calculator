import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1002;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Pleas enter your Pin number",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    //withdraw balance
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (myBalance >= amountAns.amount) {
            console.log("Your traniction is completed");
            myBalance -= amountAns.amount;
            console.log("Your remainnig balance is: " + myBalance);
        }
        else if (amountAns.amount >= myBalance) {
            console.log("Your transiction is failed due to insufficient balance");
        }
    }
    //check balance
    if (operationAns.operation === "check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    //fast cash
    else if (operationAns.operation === "fast cash") {
        let amountCash = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Please select your amount for fast cash",
                type: "list",
                choices: ["2000", "5000", "7000", "10000"],
            },
        ]);
        console.log(" Your fast cash transiction is completed");
        if (amountCash.fastCash === "2000") {
            console.log(`Your remaining balance is ${myBalance - 2000}`);
        }
        if (amountCash.fastCash === "5000") {
            console.log(`Your remaining balance is ${myBalance - 5000}`);
        }
        if (amountCash.fastCash === "7000") {
            console.log(`Your remaining balance is ${myBalance - 7000}`);
        }
        if (amountCash.fastCash === "10000") {
            console.log(`Your remaining balance is ${myBalance - 10000}`);
        }
    }
}
else {
    console.log("Incorrect pin code");
}
