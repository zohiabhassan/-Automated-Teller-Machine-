#! /usr/bin/env node

import inquirer from "inquirer";
let pinCode = 12345;
let yourBalance = 10000;

let answer = await inquirer.prompt([
  {
    message: "Enter your pin code",
    name: "pin",
    type: "number",
  },
]);

if (answer.pin === pinCode) {
  console.log("Correct Pin Code!");

  let operationAns = await inquirer.prompt([
    {
      message: "pleas select one option",
      name: "operations",
      type: "list",
      choices: ["withdraw", "checkbalance", "fastcash"],
    },
  ]);
  if (operationAns.operations === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        message: "Enter your amount",
        name: "amount",
        type: "number",
      },
    ]);
    if (amountAns.amount <= yourBalance) {
      yourBalance -= amountAns.amount;
      console.log(`your remaning balance is:${yourBalance}`);
    } else {
      console.log("insufficient balance ");
    }
  } else if (operationAns.operations === "checkbalance") {
    console.log(`your balance is : ${yourBalance}`);
  } else if (operationAns.operations === "fastcash") {
    let fastAns = await inquirer.prompt([
      {
        message: "fast cash recived",
        name: "fast",
        type: "list",
        choices: ["500", "1000", "5000", "10000"],
      },
    ]);
    yourBalance = yourBalance - fastAns.fast;
    console.log(`your remaning balance is: ${yourBalance}`);
  }
} else {
  console.log("pleas type correct pin code");
}
