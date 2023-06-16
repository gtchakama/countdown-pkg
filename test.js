// const runCountDown = require('./index')
const runCountDown = require('countdown-pkg')


const myCallback = () =>{
    console.log('The countdown has ended')
}

runCountDown('2023-06-16','22:41:25', myCallback)

