const fs = require('fs');

// 1 - What floor does Santa end up on?
// ( --> should go up 1 floor
// ) --> should go down 1 floor

function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((accumulator, currentValue) => {
            if (currentValue === '(') {
                return accumulator += 1;
            } else if (currentValue === ')') {
                return accumulator -= 1;
            }
        }, 0)
        console.timeEnd('santa-time');
        console.log('floor:', answer);
    });
}

question1();

// 2 - When does Santa first enter the basement?
function question2() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                accumulator += 1;
            } else if (currentItem === ')') {
                accumulator -= 1;
            }
            counter++;
            return accumulator < 0;
        })
        console.timeEnd('santa-time');
        console.log('basement entered at:', counter);
    })
}

question2();
