const { is } = require('../../../lib/tests');

class Calculator {
    value = 0;
    add(a) { this.value += a; }
    sub(a) { this.value -= a; }
};

prove("calculator", ({ prove }) => {
    prove("addition", ({ that }) => {
        let calculator = new Calculator();

        that("it starts with zero", ({ given }) => {
            given(calculator.value, is, 0);
        });

        that('it can add a single number', ({ given, when, then }) => {
            given(calculator.value, is, 0);
            when(() => calculator.add(1));
            then(calculator.value, is, 1);
        });

        that('it can add another number', ({ given, when, then }) => {
            given(calculator.value, is, 1);
            when(() => calculator.add(2));
            then(calculator.value, is, 3);
        });
    });

    prove("subtraction", ({ that }) => {
        let calculator = new Calculator();

        that("it starts with zero", ({ given }) => {
            given(calculator.value, is, 0);
        });

        that('it can subtract a single number', ({ given, when, then }) => {
            given(calculator.value, is, 0);
            when(() => calculator.sub(1));
            then(calculator.value, is, -1);
        });

        that('it can subtract another number', ({ given, when, then }) => {
            given(calculator.value, is, 1);
            when(() => calculator.sub(2));
            then(calculator.value, is, -3);
        });
    });
});