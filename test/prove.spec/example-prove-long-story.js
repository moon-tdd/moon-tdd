const { ensure } = require('../../lib/ensure');
const { is, is_not } = require('../../lib/tests');

class Calculator {
    value = 0;
    add(a) { this.value += a; }
    reset() { } // Incomplete function to demonstrate the code won't work.
};

prove("the calculator", ({ that, axiom }) => {
    // Setup, which will be done at the start
    let calculator = new Calculator();

    that("it starts with zero", () => {
        ensure(calculator.value, is, 0);    // Still can use ensure
    });

    that("adding a number will increase the value", ({ when }) => {
        when(() => calculator.add(1));
        ensure(calculator.value, is, 1);
    });

    that("adding another number will increase the value further", ({ given, when, then }) => {
        given(calculator.value, is, 1);      // This is a precondition test
        when(() => calculator.add(2));       // We can stringify a function
        then(calculator.value, is, 3);       // This is a postcondition test
    });

    that("reset clears the memory", (statement) => {
        statement.given(calculator.value, is_not, 0);
        statement.when(() => calculator.reset());
        statement.then(calculator.value, is, 0);       // Fails, but doesn't block the next 
        statement.then(calculator.value, isa_number);  // Pass, but doesn't block the next 
    });

    // Ensures a truth
    axiom(() => {
        calculator.value = 0;
    });

    that("adding a number after reset doesn't use previous values", () => {
        given(calculator.value, is, 0);
        when(() => calculator.add(5));
        then(calculator.value, is, 5);
    });

    return () => {
        // Teardown logic, will be executed when all tests
        calculator = undefined;
    };
});