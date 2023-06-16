function runCountDown(date, time, callback) {
    const lastDate = new Date(`${date}T${time}`)
    const currentDate = new Date();

    if (lastDate <= currentDate) {
        throw new Error('The provided date has passed')
    }

    const remaingTime = lastDate - currentDate

    setTimeout(() => {
        callback()
    }, remaingTime);

}

module.exports = runCountDown