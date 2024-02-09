const express = require('express');
const calculatorController = require('../controllers/calculatorControllers')
const router = express.Router();


// Addition
router.get('/add', (req, res) => {
    calculatorController.addNumbers(req,res)
});

// Subtraction
router.get('/sub', (req, res) => {
    calculatorController.subNumbers(req,res)
});

// Multiplication
router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req,res)
});

// Division
router.get('/divide', (req, res) => {
        calculatorController.divideNumbers(req,res)
});

module.exports = router;
