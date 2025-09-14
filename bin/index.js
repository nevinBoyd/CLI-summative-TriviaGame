#!/usr/bin/env node
import { program } from "commander";
import { showMainMenu } from "../src/lib/gameLogic.js";
import { gameState } from "../src/lib/state.js";


async function main() {
    await showMainMenu(gameState);
}

program
    .name("trivia")
    .description("Random Trivia the CLI Edition")
    .action(main);

program.parse(process.argv);
