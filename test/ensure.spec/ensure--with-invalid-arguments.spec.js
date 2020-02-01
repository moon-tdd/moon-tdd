const { ensure } = require("../../lib/ensure");
const { should_throw, equals } = require('../helper');

// It should throw when the second argument is a function
ensure(
    should_throw(() => ensure(2, 3)).message,
    equals,
    "3 is not a function, but a number"
);

// The following test prevents test cases were a test-function was forgotten (incorrect definition or otherwise)
ensure(
    should_throw(() => ensure(true, undefined)).message,
    equals,
    "Expecting the second parameter to be a function, but was falsy"
);