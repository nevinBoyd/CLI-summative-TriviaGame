#!/usr/bin/env node

import { program } from "commander";
import { gameState } from "../src/state.js";   // ✅ use named import
import { showMainMenu } from "../src/gameLogic.js";

showMainMenu(gameState);

program.parse(process.argv);

