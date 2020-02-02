/**
 * Captures the exception and returns it. If no exception was captured it will throw an error of it's own.
 * @param {function} act 
 * @throws When the `act` doesn't throw
 * @returns {Error} The exception throw by the act.
 */
export function should_throw(act: Function) {
    try {
        act();
    } catch (ex) {
        return ex;
    }

    const error = new Error(`The code \`${act}\` should throw`);
    const stack = (error.stack || "").split('\n');
    stack.splice(act.toString().split("\n").length, 1);
    error.stack = stack.join('\n');
    throw error;
}

export function equals<T>(actual: T, expected: T) {
    return actual === expected;
}

