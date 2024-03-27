"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var randomNumber = 13;
var answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number",
    },
]);
if (answers.userGuessedNumber === "13") {
    console.log("You are eligible");
}
else {
    console.log("You are not eligible");
}
