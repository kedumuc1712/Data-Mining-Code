var dataSet = [[5.1,3.5,1.4,0.2,0],
[4.9,3.0,1.4,0.2,0],
[4.7,3.2,1.3,0.2,0],
[4.6,3.1,1.5,0.2,0],
[5.0,3.6,1.4,0.2,0],
[5.4,3.9,1.7,0.4,0],
[4.6,3.4,1.4,0.3,0],
[5.0,3.4,1.5,0.2,0],
[4.4,2.9,1.4,0.2,0],
[4.9,3.1,1.5,0.1,0],
[5.4,3.7,1.5,0.2,0],
[4.8,3.4,1.6,0.2,0],
[4.8,3.0,1.4,0.1,0],
[4.3,3.0,1.1,0.1,0],
[5.8,4.0,1.2,0.2,0],
[5.7,4.4,1.5,0.4,0],
[5.4,3.9,1.3,0.4,0],
[5.1,3.5,1.4,0.3,0],
[5.7,3.8,1.7,0.3,0],
[5.1,3.8,1.5,0.3,0],
[5.4,3.4,1.7,0.2,0],
[5.1,3.7,1.5,0.4,0],
[4.6,3.6,1.0,0.2,0],
[5.1,3.3,1.7,0.5,0],
[4.8,3.4,1.9,0.2,0],
[5.0,3.0,1.6,0.2,0],
[5.0,3.4,1.6,0.4,0],
[5.2,3.5,1.5,0.2,0],
[5.2,3.4,1.4,0.2,0],
[4.7,3.2,1.6,0.2,0],
[4.8,3.1,1.6,0.2,0],
[5.4,3.4,1.5,0.4,0],
[5.2,4.1,1.5,0.1,0],
[5.5,4.2,1.4,0.2,0],
[4.9,3.1,1.5,0.1,0],
[5.0,3.2,1.2,0.2,0],
[5.5,3.5,1.3,0.2,0],
[4.9,3.1,1.5,0.1,0],
[4.4,3.0,1.3,0.2,0],
[5.1,3.4,1.5,0.2,0],
[5.0,3.5,1.3,0.3,0],
[4.5,2.3,1.3,0.3,0],
[4.4,3.2,1.3,0.2,0],
[5.0,3.5,1.6,0.6,0],
[5.1,3.8,1.9,0.4,0],
[4.8,3.0,1.4,0.3,0],
[5.1,3.8,1.6,0.2,0],
[4.6,3.2,1.4,0.2,0],
[5.3,3.7,1.5,0.2,0],
[5.0,3.3,1.4,0.2,0],
[7.0,3.2,4.7,1.4,1],
[6.4,3.2,4.5,1.5,1],
[6.9,3.1,4.9,1.5,1],
[5.5,2.3,4.0,1.3,1],
[6.5,2.8,4.6,1.5,1],
[5.7,2.8,4.5,1.3,1],
[6.3,3.3,4.7,1.6,1],
[4.9,2.4,3.3,1.0,1],
[6.6,2.9,4.6,1.3,1],
[5.2,2.7,3.9,1.4,1],
[5.0,2.0,3.5,1.0,1],
[5.9,3.0,4.2,1.5,1],
[6.0,2.2,4.0,1.0,1],
[6.1,2.9,4.7,1.4,1],
[5.6,2.9,3.6,1.3,1],
[6.7,3.1,4.4,1.4,1],
[5.6,3.0,4.5,1.5,1],
[5.8,2.7,4.1,1.0,1],
[6.2,2.2,4.5,1.5,1],
[5.6,2.5,3.9,1.1,1],
[5.9,3.2,4.8,1.8,1],
[6.1,2.8,4.0,1.3,1],
[6.3,2.5,4.9,1.5,1],
[6.1,2.8,4.7,1.2,1],
[6.4,2.9,4.3,1.3,1],
[6.6,3.0,4.4,1.4,1],
[6.8,2.8,4.8,1.4,1],
[6.7,3.0,5.0,1.7,1],
[6.0,2.9,4.5,1.5,1],
[5.7,2.6,3.5,1.0,1],
[5.5,2.4,3.8,1.1,1],
[5.5,2.4,3.7,1.0,1],
[5.8,2.7,3.9,1.2,1],
[6.0,2.7,5.1,1.6,1],
[5.4,3.0,4.5,1.5,1],
[6.0,3.4,4.5,1.6,1],
[6.7,3.1,4.7,1.5,1],
[6.3,2.3,4.4,1.3,1],
[5.6,3.0,4.1,1.3,1],
[5.5,2.5,4.0,1.3,1],
[5.5,2.6,4.4,1.2,1],
[6.1,3.0,4.6,1.4,1],
[5.8,2.6,4.0,1.2,1],
[5.0,2.3,3.3,1.0,1],
[5.6,2.7,4.2,1.3,1],
[5.7,3.0,4.2,1.2,1],
[5.7,2.9,4.2,1.3,1],
[6.2,2.9,4.3,1.3,1],
[5.1,2.5,3.0,1.1,1],
[5.7,2.8,4.1,1.3,1],
[6.3,3.3,6.0,2.5,2],
[5.8,2.7,5.1,1.9,2],
[7.1,3.0,5.9,2.1,2],
[6.3,2.9,5.6,1.8,2],
[6.5,3.0,5.8,2.2,2],
[7.6,3.0,6.6,2.1,2],
[4.9,2.5,4.5,1.7,2],
[7.3,2.9,6.3,1.8,2],
[6.7,2.5,5.8,1.8,2],
[7.2,3.6,6.1,2.5,2],
[6.5,3.2,5.1,2.0,2],
[6.4,2.7,5.3,1.9,2],
[6.8,3.0,5.5,2.1,2],
[5.7,2.5,5.0,2.0,2],
[5.8,2.8,5.1,2.4,2],
[6.4,3.2,5.3,2.3,2],
[6.5,3.0,5.5,1.8,2],
[7.7,3.8,6.7,2.2,2],
[7.7,2.6,6.9,2.3,2],
[6.0,2.2,5.0,1.5,2],
[6.9,3.2,5.7,2.3,2],
[5.6,2.8,4.9,2.0,2],
[7.7,2.8,6.7,2.0,2],
[6.3,2.7,4.9,1.8,2],
[6.7,3.3,5.7,2.1,2],
[7.2,3.2,6.0,1.8,2],
[6.2,2.8,4.8,1.8,2],
[6.1,3.0,4.9,1.8,2],
[6.4,2.8,5.6,2.1,2],
[7.2,3.0,5.8,1.6,2],
[7.4,2.8,6.1,1.9,2],
[7.9,3.8,6.4,2.0,2],
[6.4,2.8,5.6,2.2,2],
[6.3,2.8,5.1,1.5,2],
[6.1,2.6,5.6,1.4,2],
[7.7,3.0,6.1,2.3,2],
[6.3,3.4,5.6,2.4,2],
[6.4,3.1,5.5,1.8,2],
[6.0,3.0,4.8,1.8,2],
[6.9,3.1,5.4,2.1,2],
[6.7,3.1,5.6,2.4,2],
[6.9,3.1,5.1,2.3,2],
[5.8,2.7,5.1,1.9,2],
[6.8,3.2,5.9,2.3,2],
[6.7,3.3,5.7,2.5,2],
[6.7,3.0,5.2,2.3,2],
[6.3,2.5,5.0,1.9,2],
[6.5,3.0,5.2,2.0,2],
[6.2,3.4,5.4,2.3,2],
[5.9,3.0,5.1,1.8,2]];


arrSum = function(arr){
    return arr.reduce(function(a,b){
      return a + b
    }, 0);
  }

function splitDataset(dataSet, trainingSet, testSet) {
    for (let i = 0; i < 60; i++) {
        trainingSet.push(dataSet[i]);
    }

    for (let i = 60; i < dataSet.length; i++) {
        testSet.push(dataSet[i]);
    }
}

function separateByClass(dataSet) {
    let separated = {};
    for (let i = 0; i < dataSet.length; i++) {
        let vector = dataSet[i];
        if (!(vector[4] in separated)) {
            separated[vector[4]] = [];
        }
        separated[vector[4]].push(vector);
    }

    return separated;
}

function mean(numbers) {
    return arrSum(numbers) / (numbers.length);
}

function stdev(numbers) {
    let avg = mean(numbers);
    let sigma = 0;

    for (let i = 0; i < numbers.length; i++) {
        sigma += Math.pow(numbers[i] - avg, 2);
    }

    let variance = sigma / (numbers.length - 1);
    return Math.sqrt(variance);
}

function summarize(dataSet) {
    let summaries = [];
    let column1 = [];
    let column2 = [];
    let column3 = [];
    let column4 = [];

    
    for (let k = 0; k < dataSet.length; k++) {
        column1.push(dataSet[k][0]);
        column2.push(dataSet[k][1]);
        column3.push(dataSet[k][2]);
        column4.push(dataSet[k][3]);
    }

    summaries.push([mean(column1), stdev(column1)]);
    summaries.push([mean(column2), stdev(column2)]);
    summaries.push([mean(column3), stdev(column3)]);
    summaries.push([mean(column4), stdev(column4)]);

    //console.log(summaries);

    return summaries;
}

function summarizeByClass(dataSet) {
    let separated = separateByClass(dataSet);
    let summaries = {};

   for (let property in separated) {
      summaries[property] = summarize(separated[property]);
      
   }
   //console.log(summaries);
   
   return summaries;
}

function calculateProbalibity(x, mean, stdev) {
    let exponent = Math.exp(-(Math.pow(x - mean, 2) / (2 * Math.pow(stdev, 2))));
    return (1 / (Math.sqrt(2 * Math.PI) * stdev)) * exponent;
}

function calculateClassProbabilities(summaries, inputVector) {
    let probabilities = {};
    for (let property in summaries) {
        probabilities[property] = 1;
        for (let i = 0; i < summaries[property].length; i++) {
            //console.log(summaries[property]);
            let mean = summaries[property][0];
            let stdev = summaries[property][1];
            let x = inputVector[i];
            probabilities[property] *= calculateProbalibity(x, mean, stdev)
        }
    }
    //console.log(probabilities);
    return probabilities;
}

function predict(summaries, inputVector) {
    let probabilities = calculateClassProbabilities(summaries, inputVector);
    let bestLabel = -1;
    let bestProb = -1;

    for (let classValue in probabilities) {
        if (bestLabel == -1 || bestProb < probabilities[classValue]) {
            bestProb = probabilities[classValue];
            bestLabel = classValue;
        }
    }
    //console.log(bestLabel);

    return bestLabel;
}

function getPredictions(summaries, testSet) {
    let predictions = [];
    for (let i = 0; i < testSet.length; i++) {
        let result = predict(summaries, testSet[i]);
        predictions.push(result);
    }

    return predictions;
}

function getAccuracy(testSet, predictions) {
    let correct = 0;
    for (let i = 0; i < testSet.length; i++) {
        if (testSet[i][4] == predictions[i]) {
            correct += 1;
        }
    }

    return (correct / testSet.length) * 100;
}

function main() {
    trainingSet = [];
    testSet = [];
    splitDataset(dataSet, trainingSet, testSet);

    let summaries = summarizeByClass(trainingSet);
    let predictions = getPredictions(summaries, testSet);
    let accuracy = getAccuracy(testSet, predictions);

    //calculateClassProbabilities(summaries, [1.2, 2.5, 3.6, 4.8]);
    calculateProbalibity(7, 5.2, 3.6);
    console.log(accuracy);
}

main();

