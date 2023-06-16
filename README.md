# Countdown Timer

This npm package provides a countdown timer that can be used in Node.js applications. It allows you to set a specific date and time and execute a callback function when the countdown ends.

## Installation

To install the package, run the following command:

```
npm install countdown-pkg
```

## Usage

To use the countdown timer in your Node.js application, import it into your code:

```
const runCountDown = require('countdown-pkg')
```

Then, create a callback function to execute when the timer ends:

```
const myCallback = () =>{
    console.log('The countdown has ended')
}
```

Finally, call the `runCountDown` function with the desired end date and time and the callback function:

```
runCountDown('2023-06-16','19:32:50', myCallback)
```

The timer will countdown to the specified date and time and execute the callback function when it ends.

## License

