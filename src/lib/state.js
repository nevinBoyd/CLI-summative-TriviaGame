// src/state.js

export const gameState = {
    playerName: "",
    stats: {
        score: 0,
        answers: [] // will store objects like { question: "Q1...", answer: "Austin Powers...", correct: true/false }
    }
};

export function resetGameState() {
    gameState.playerName = "";
    gameState.stats.score = 0;
    gameState.stats.answers = [];
}
