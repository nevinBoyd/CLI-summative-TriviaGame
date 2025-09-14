const { delayedReminder } = require('../src/reminder.js')

jest.useFakeTimers()

describe('delayedReminder', () => {
    test('should log the message after the specified delay', async () => {
        console.log = jest.fn() // Mock console.log

        const message = 'This is your reminder!'
        const delay = 3000 // 3 seconds

        // Call the function
        const reminderPromise = delayedReminder(message, delay)

        // Fast-forward the timer
        jest.advanceTimersByTime(delay)

        // Await the promise
        await reminderPromise

        // Verify the message was logged
        expect(console.log).toHaveBeenCalledTimes(1)
        expect(console.log).toHaveBeenCalledWith(message)
    })
})