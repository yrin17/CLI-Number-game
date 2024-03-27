import inquirer from "inquirer";


const randomNumber = 13;
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number",
    },
]);

if(answers.userGuessedNumber === "13"){
    console.log("You are eligible");
}

else{
    console.log("You are not eligible");
}