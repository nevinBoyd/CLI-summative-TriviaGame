function delayedReminder(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message)
            resolve()
        }, delay)
    })
}

module.exports = { delayedReminder }
