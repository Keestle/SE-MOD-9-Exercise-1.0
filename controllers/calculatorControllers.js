const calculator = require('./calculator.js');

const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = calculator.add(number1, number2);
    console.log(sum);
    res.status(200).json({ result: sum });
};

const subNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sub = calculator.subtract(number1, number2);
    console.log(sub);
    res.status(200).json({ result: sub });
};

const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let product = calculator.multiply(number1, number2);
    console.log(product);
    res.status(200).json({ result: product });
};

const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    if (number2 === 0) {
        res.status(400).json({ error: 'Cannot divide by zero' });
        return;
    }

    let quotient = calculator.divide(number1, number2);
    console.log(quotient);
    res.status(200).json({ result: quotient });
};

module.exports = {
    addNumbers,
    subNumbers,
    multiplyNumbers,
    divideNumbers
};
