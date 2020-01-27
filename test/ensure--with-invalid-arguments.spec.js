const { ensure } = require("../lib/moon-tdd");
const { should_throw, equals } = require('./helper');
/**
 * @type {Error}
 */
const param2_notFuncError = should_throw(() => ensure(2, 3));


ensure(param2_notFuncError.message, equals, "3 is not a function, but a number");