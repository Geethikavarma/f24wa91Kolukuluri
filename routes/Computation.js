

const express = require('express');
const router = express.Router();

function selectMathFunction(idLastDigit) {
    const functions = {
        0: { fn: 'Math.abs', method: Math.abs },
        1: { fn: 'Math.sqrt', method: Math.sqrt },
        2: { fn: 'Math.cbrt', method: Math.cbrt },
        3: { fn: 'Math.log', method: Math.log },
        4: { fn: 'Math.exp', method: Math.exp },
        5: { fn: 'Math.sin', method: Math.sin },
        6: { fn: 'Math.cos', method: Math.cos },
        7: { fn: 'Math.tan', method: Math.tan },
        8: { fn: 'Math.floor', method: Math.floor },
        9: { fn: 'Math.ceil', method: Math.ceil }
    };
    return functions[idLastDigit] || functions[0]; 
}

router.get('/', (req, res) => {
    const idLastDigit = 1; 
    const mathFunction = selectMathFunction(idLastDigit);

    const x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;
    const result = mathFunction.method(x);

    const response = `${mathFunction.fn} applied to ${x} is ${result}`;
    res.send(response);
});

module.exports = router;
