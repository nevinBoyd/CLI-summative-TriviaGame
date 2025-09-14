## CLI-summative-TriviaGame
# Random Trivia: The CLI Edition

# This is my Summative CLI Trivia Game project.
# It’s a command-line game built with JavaScript, Commander, and Inquirer.
# The game challenges you with fun trivia questions, gives immediate feedback,
# tracks your score, and even includes a countdown timer for each question.

------------------------------------------------
# HOW TO LOAD & PLAY
------------------------------------------------
# 1. Clone the repo:
#    git clone https://github.com/<your-username>/CLI-summative-TriviaGame.git
#    cd CLI-summative-TriviaGame
#
# 2. Install dependencies:
#    npm install
#
# 3. Link the CLI command (only once):
#    chmod +x ./bin/index.js
#    npm link
#
# 4. Start the game:
#    trivia
#
# That will open the main menu in your terminal.

------------------------------------------------
# GAME FLOW
------------------------------------------------
# When you run `trivia`, you’ll see the Main Menu with 4 options:
#
# 1 START GAME
#    - Prompts for your name
#      -> If you type a name with profanity: 
#         "Sorry this is for school - PLEASE NO PROFANITIES -"
#         (then returns to main menu)
#      -> Otherwise:
#         "Hi <YourName>, let's check your knowledge with these 3 Trivia Questions"
#    - You’ll get 3 trivia questions, one at a time.
#    - Each question has 15 seconds to answer.
#    - At 3 seconds left, a warning is shown:
#         "Hurry up! Only 3 seconds left!"
#    - If you don’t answer in time:
#         "Time's Up, Try Again."
#    - After all 3 questions, results are shown:
#         • All 3 correct → "Very Nice, but where's my AT-AT at?"
#         • 1 or 2 correct → "Sorry this time you lost. That was fun, I won't tell a soul"
#         • 0 correct → "Sorry this time you lost. That was fun, I won't tell a soul"
#
# 2 GET RESULTS
#    - Shows your past answers for this session:
#      Example:
#      Results for <YourName>:
#      Q1 Result: Correct
#          Your Answer: Austin Powers (Yeah, Baby, Yeah!)
#      Q2 Result: Incorrect
#          Your Answer: Bronze Age issue #47 (1982)
#          Correct Answer: Defenders #89 (1980)
#
#      Final Score: 1 / 3
#
# 3 RESET RESULTS
#    - Clears your saved answers:
#         "Wiping Memory... forget about the cake"
#
# 4 END GAME
#    - Quits the game with:
#         "Nooooooooooooo don't leave......"

------------------------------------------------
# SKILLS IMPLEMENTED
------------------------------------------------
# - Functions & Modular Code
#   • Split logic into multiple files: countdown.js, reminder.js, recurringTimer.js, state.js, and gameLogic.js
#
# - Arrays & Iteration
#   • Stored trivia questions in an array and looped through them sequentially
#   • Used array methods like map() and reduce()
#
# - Asynchronous Programming
#   • Used setTimeout for delayed reminders
#   • Used setInterval for recurring timers
#   • Applied async/await and Promise with time limits (15s timer, 3s warning)
#
# - User Input & CLI Interaction
#   • Commander for CLI commands
#   • Inquirer prompts for menus and question selection
#
# - Error Handling & Validation
#   • Checks for profanity in player names
#   • Handles timeouts with custom messages
#
# - Testing with Jest
#   • Pre-written tests for countdown, reminder, and recurring timer
#   • Configured npm test script with Jest coverage
#
# - Version Control
#   • Organized repo with /src, /test, and /bin folders
#   • Uses npm scripts and git for tracking changes

------------------------------------------------
# SUMMARY
------------------------------------------------
# This project demonstrates how JavaScript timers, asynchronous code, and CLI tools 
# can be used to create an interactive, real-world application.  
# By building "Random Trivia: The CLI Edition," I practiced:
# - Writing modular JavaScript
# - Handling synchronous vs asynchronous flows
# - Using Web APIs (setTimeout, setInterval, fetch if extended)
# - Implementing input validation and error handling
# - Running automated tests with Jest
# - Managing code with version control (Git/GitHub)
#
# The result is a fun, interactive trivia game that runs in the terminal,
# provides real-time feedback, and reinforces key programming concepts.
