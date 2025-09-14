// src/state.js
export const gameState = {
    playerName: "",
    stats: {
        score: 0,
        answers: [] // { question, answer, correct, correctAnswer }
    }
};

export function resetGameState() {
    gameState.playerName = "";
    gameState.stats.score = 0;
    gameState.stats.answers = [];
}
