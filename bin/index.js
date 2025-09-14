#!/usr/bin/env node
import { program } from "commander";
import { showMainMenu } from "../src/gameLogic.js";
import { gameState } from "../src/state.js";

async function main() {
    await showMainMenu(gameState);
}

program
    .name("trivia")
    .description("Random Trivia the CLI Edition")
    .action(main);

