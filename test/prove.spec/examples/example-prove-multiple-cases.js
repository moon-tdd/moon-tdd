const { is } = require('../../../lib/tests');

class Calculator {
    value = 0;
    add(a) { this.value += a; }
};

const testData = [
    { a: 1, b: 2, c: 3 },
    { a: 5, b: 8, c: 13 },
];

testData.forEach(({ a, b, c }) => {
    prove.that(`${a} + ${b} = ${c}`, ({ given, when, then }) => {
        var calculator = new Calculator();
        given(calculator.value, is, 0);
        when(() => calculator.add(a));
        when(() => calculator.add(b));
        then(calculator.value, is, c);
    });
});
