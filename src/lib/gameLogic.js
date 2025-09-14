import chalk from "chalk";
import { select, input } from "@inquirer/prompts";
import { questions } from "../questions.js";

export const gameState = {
    name: "",
    stats: { wins: 0, losses: 0 }
};

export async function showMainMenu() {
    const action = await select({
        message: "Main Menu",
        choices: [
            { name: "START GAME", value: "start" },
            { name: "GET RESULTS", value: "results" },
            { name: "RESET RESULTS", value: "reset" },
            { name: "END GAME", value: "end" }
        ]
    });

    switch (action) {
        case "start":
            await startGame();
            break;
        case "results":
            console.log(
                chalk.magenta(
                    "Dude what does mine say? SWEET, but dut what does mine say ............."
                )
            );
            await showMainMenu();
            break;
        case "reset":
            gameState.stats = { wins: 0, losses: 0 };
            console.log(chalk.blue("Wiping Memory... forget about the cake"));
            await showMainMenu();
            break;
        case "end":
            console.log(chalk.red("Nooooooooooooooo don't leave......"));
            process.exit(0);
    }
}

async function startGame() {
    // Ask for player’s name first
    let name = "";
    while (!name) {
        const entered = await input({ message: "Welcome, type your name:" });
        if (/fuck|shit|bitch|asshole|damn|hell/i.test(entered)) {
            console.log(chalk.red("Sorry this is for school - PLEASE NO PROFANITIES -"));
        } else if (entered.trim() === "") {
            console.log(chalk.yellow("Name cannot be empty."));
        } else {
            name = entered.trim();
        }
    }

    gameState.name = name;
    console.log(chalk.green(`Hi ${name}, let's check your knowledge with these 3 Trivia Questions!`));

    // Loop over each question but return to menu immediately after handling one
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const outcome = await askTimedQuestion(q, 15000);

        console.log(
            `Q${i + 1}) Result: ${outcome.result}, Your Answer: ${outcome.answer}`
        );

        // Track score if answered correctly
        if (outcome.result.includes("Correct")) {
            gameState.stats.wins++;
        } else {
            gameState.stats.losses++;
        }

        // Force return to menu after **one question**
        await showMainMenu();
        return; // exit after redirecting to menu
    }
}

/**
 * Ask one timed multiple-choice question with 15s limit and 3s warning
 */
async function askTimedQuestion(question, timeLimit = 15000) {
    let warningTimer;
    let timeoutId;

    console.log(chalk.yellow(`\n${question.question}`));

    const answerPromise = (async () => {
        const answer = await select({
            message: "Choose an option:",
            choices: question.options.map(opt => ({ name: opt, value: opt }))
        });
        clearTimeout(warningTimer);
        clearTimeout(timeoutId);

        if (answer === question.correct) {
            return { result: "Correct!", answer };
        } else {
            return { result: "Incorrect", answer };
        }
    })();

    const timeoutPromise = new Promise(resolve => {
        warningTimer = setTimeout(() => {
            console.log(chalk.red("3 seconds left!"));
        }, timeLimit - 3000);

        timeoutId = setTimeout(() => {
            resolve({
                result: "Time's Up, Try Again.",
                answer: "(no answer)"
            });
        }, timeLimit);
    });

    return Promise.race([answerPromise, timeoutPromise]);
}
