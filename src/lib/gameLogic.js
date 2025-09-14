import { select, input } from "@inquirer/prompts";
import { gameState, resetGameState } from "./state.js";
import { questions } from "./questions.js";
export async function showMainMenu(state) {
    while (true) {
        const choice = await select({
            message: "Main Menu",
            choices: [
                { name: "START GAME", value: "start" },
                { name: "GET RESULTS", value: "results" },
                { name: "RESET RESULTS", value: "reset" },
                { name: "END GAME", value: "end" },
            ],
        });

        if (choice === "start") {
            await startGame();
        } else if (choice === "results") {
            showResults();
        } else if (choice === "reset") {
            resetResults();
        } else if (choice === "end") {
            console.log("Nooooooooooooo don't leave......");
            process.exit(0);
        }
    }
}

async function startGame() {
    const name = await input({ message: "Welcome, type your name:" });
    if (containsProfanity(name)) {
        console.log("Sorry this is for school - PLEASE NO PROFANITIES -");
        return;
    }

    gameState.name = name;
    gameState.results = [];

    console.log(`Hi ${name}, let's check your knowledge with these 3 Trivia Questions`);

    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];

        console.log(`You have 15 seconds to answer this question...`);
        let remaining = 15;

        const warningTimer = setInterval(() => {
            remaining--;
            if (remaining === 3) {
                console.log("⏰ Hurry up! Only 3 seconds left!");
            }
        }, 1000);

        const answerPromise = askQuestion(q, i + 1);
        const timeoutPromise = new Promise((resolve) =>
            setTimeout(() => {
                clearInterval(warningTimer);
                console.log("Time's Up, Try Again.");
                resolve(null);
            }, 15000)
        );

        const answer = await Promise.race([answerPromise, timeoutPromise]);
        clearInterval(warningTimer);

        if (answer) {
            gameState.results.push({
                question: q.question,
                answer,
                correct: answer === q.correct,
                correctAnswer: q.correct,
            });
        } else {
            gameState.results.push({
                question: q.question,
                answer: "No answer",
                correct: false,
                correctAnswer: q.correct,
            });
        }
    }

    showResults();
}

async function askQuestion(q, num) {
    return await select({
        message: `Q${num}) ${q.question}`,
        choices: q.options.map((opt) => ({ name: opt, value: opt })),
    });
}

function showResults() {
    if (!gameState.results.length) {
        console.log("Dude what does mine say? SWEET, but dut what does mine say .............");
        return;
    }

    console.log(`\nResults for ${gameState.name}:`);
    let correctCount = 0;

    gameState.results.forEach((res, idx) => {
        if (res.correct) {
            console.log(`Q${idx + 1}) Result: Correct`);
            console.log(`   Your Answer: ${res.answer}`);
        } else {
            console.log(`Q${idx + 1}) Result: Incorrect`);
            console.log(`   Your Answer: ${res.answer}`);
            console.log(`   Correct Answer: ${res.correct}`);
        }
    });

    console.log(`\nFinal Score: ${correctCount} / ${questions.length}`);

    if (correctCount === questions.length) {
        console.log("Very Nice, but where's my AT-AT at?");
    } else if (correctCount >= 1) {
        console.log("Sorry this time you lost. That was fun, I won't tell a soul");
    } else {
        console.log("Sorry this time you lost. That was fun, I won't tell a soul");
    }
}

function resetResults() {
    resetGameState();
    console.log("Wiping Memory... forget about the cake");
}

function containsProfanity(name) {
    const banned = ["fuck", "shit", "bitch", "ass", "damn"];
    return banned.some((bad) => name.toLowerCase().includes(bad));
}
