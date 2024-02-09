// calculator.js

const logger = require('./logger');

function generateRandomId() {
    return Math.floor(Math.random() * 1000); // Adjust the range as needed
}

// Addition function
function add(a, b) {
    const id = generateRandomId();
    const result = a + b;
    
    // Log the calculation
    logger.log(`Addition: ${a} + ${b} = ${result} (ID: ${id})`);

    return { id, result };
}

// Subtraction function
function subtract(a, b) {
    const id = generateRandomId();
    const result = a - b;

    // Log the calculation
    logger.log(`Subtraction: ${a} - ${b} = ${result} (ID: ${id})`);

    return { id, result };
}

// Multiplication function
function multiply(a, b) {
    const id = generateRandomId();
    const result = a * b;

    // Log the calculation
    logger.log(`Multiplication: ${a} * ${b} = ${result} (ID: ${id})`);

    return { id, result };
}

// Division function
function divide(a, b) {
    const id = generateRandomId();

    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    const result = a / b;

    // Log the calculation
    logger.log(`Division: ${a} / ${b} = ${result} (ID: ${id})`);

    return { id, result };
}

// Expose the functions for external use
module.exports = {
    add,
    subtract,
    multiply,
    divide
};
