const { countdownTimer } = require('../src/countdown.js');

jest.useFakeTimers();

describe('countdownTimer', () => {
    beforeEach(() => {
        console.log = jest.fn(); // Mock console.log
    });

    afterEach(() => {
        jest.clearAllMocks(); // Reset mocks after each test
    });

    test('should log remaining time at intervals and stop at 0', () => {
        const startTime = 5; // 5 seconds
        const interval = 1000; // 1 second

        const timerId = countdownTimer(startTime, interval);

        // Fast-forward all timers
        jest.advanceTimersByTime(startTime * interval);

        // Expect 5 countdown logs + 1 "Time’s Up" log
        expect(console.log).toHaveBeenCalledTimes(startTime + 1);

        // Check the countdown logs
        expect(console.log).toHaveBeenNthCalledWith(1, "Time left: 5 seconds");
        expect(console.log).toHaveBeenNthCalledWith(2, "Time left: 4 seconds");
        expect(console.log).toHaveBeenNthCalledWith(3, "Time left: 3 seconds");
        expect(console.log).toHaveBeenNthCalledWith(4, "Time left: 2 seconds");
        expect(console.log).toHaveBeenNthCalledWith(5, "Time left: 1 seconds");
        expect(console.log).toHaveBeenNthCalledWith(6, "Time's Up, Try Again.");

        // Verify clearInterval was called by cleaning up manually
        clearInterval(timerId);
    });
});
