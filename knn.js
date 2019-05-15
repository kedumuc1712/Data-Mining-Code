const dataSet = require('./irisdata');

function splitDataset(dataSet, trainingSet, testSet) {
    for (let i = 0; i < 60; i++) {
        trainingSet.push(dataSet[i]);
    }

    for (let i = 60; i < dataSet.length; i++) {
        testSet.push(dataSet[i]);
    }
}

function euclidDistance(instance1, instance2, length) {
    let distance = 0;
    for (let i = 0; i < length; i++) {
        distance += Math.pow(instance1[i] - instance2[i], 2);
    }
    return Math.sqrt(distance);
}

function getNeighbors(trainingSet, testInstance, k) {
    let distances = [];
    let neighbors = [];
    let length = testInstance.length - 1;
    for (let i = 0; i < trainingSet.length;  i++) {
        let dist = euclidDistance(testInstance, trainingSet[i], length);
        distances.push(dist);
    }

    let minDist = 0;

    for (let i = 0; i < k; i++) {
        minDist = 0;
        let index = 0;
        for (let x = 0; x < trainingSet.length; x++) {
            if (distances[x] < minDist) {
                minDist = distances[x];
                index = x;
            }
        }
        neighbors.push({dist: minDist, index: x });
    }

    return neighbors;
}

function getResponse(neighbors) {
    let classVotes = {};
    for (let i = 0; i < k; i++) {
        let index = neighbors[i].index;
        response = trainingSet[index][4];
        for (let j = 0; j < classVotes.length; j++) {
            if (response in classVotes) {
                classVotes[response] += 1;
            }
            else {
                classVotes[response] = 1;
            }
        }
    }

    let max = 0;
    let result;
    for (let i = 0; i < classVotes.length; i++) {
        if (classVotes[i][response] > max) {
            result = Object.keys(classVotes)[i];
        }
    }
    return result

}

function main() {
    trainingSet = [];
    testSet = [];
    splitDataset(dataSet, trainingSet, testSet);

    console.log("Main");

    predictions = [];
    k = 3;
    for (let i = 0; i < testSet.length; i++) {
        let neighbors = getNeighbors(trainingSet, testSet[i], k);
        let result = getResponse(neighbors);
        predictions.push(result);
    }

    //for (let i = 0; i < predictions.length; i++) {
       console.log(predictions);
    //}
}

main();
