
var carFleet = function (target, position, speed) {
    debugger;
    const length = position.length;

    let pairs = new Array(length).fill(null);

    for (let i = 0; i < position.length; i++) {
        pairs[i] = [position[i], speed[i]];
    }

    pairs.sort((a, b) => b[0] - a[0]); // sort by postion in DESC order

    const timeToReach = new Array(length).fill(null);

    let fleetCount = 0;
    debugger;
    for (let i = 0; i < length; i++) {
        const [thisPosition, thisSpeed] = pairs[i];

        timeToReach[i] = (target - thisPosition) / thisSpeed; // assigned once

        // if current car is faster but will collide at some point
        // because a slower car is in its time range
        if (i >= 1 && timeToReach[i] <= timeToReach[i - 1]) {
            // timeToReach[i] assigned twice if followed up car is faster it speed reduces
            // to car speed in current range of time
            timeToReach[i] = timeToReach[i - 1];
        } else {
            fleetCount++;
        }
    }
    debugger;
    return fleetCount;


};

// console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // 3
console.log(carFleet(100, [0, 2, 4], [4, 2, 1])); // 3
