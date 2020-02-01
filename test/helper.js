/**
 * Captures the exception and returns it. If no exception was captured it will throw an error of it's own.
 * @param {function} act 
 * @throws When the `act` doesn't throw
 * @returns {Error} The exception throw by the act.
 */
function should_throw(act) {
    try {
        act();
    } catch (ex) {
        return ex;
    }

    const error = new Error(`The code \`${act}\` should throw`);
    const stack = error.stack.split('\n');
    stack.splice(1, 1);
    error.stack = stack.join('\n');
    throw error;
}

function equals(actual, expected) {
    return actual === expected;
}

exports.should_throw = should_throw;
exports.equals = equals;
