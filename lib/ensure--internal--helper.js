const { reduceStackTrace } = require('./internal/error-helper');

function throw_unless_function(test) {
    const testType = typeof test;
    if (testType === "function") return;

    throw new Error(`${test} is not a function, but a ${testType}`);
}

function createEnsureError(value, test, ...others) {
    const errorText = test.name || test.toString();

    // Make the arguments a wrapped string
    others_str = others.map(x => `\`${x}\``);
    const errorMessage = `Failed to ensure \`${value}\` ${errorText} ${others_str}`.trim();
    throw reduceStackTrace(new Error(errorMessage), 2);
    return err;
}

function createInvalidResponseError(test, testResultType) {
    const errorText = `The test \`${test.name || test.toString()}\` must return a Boolean and not a ${testResultType}`;
    throw reduceStackTrace(new Error(errorText), 2);
}


exports.createEnsureError = createEnsureError;
exports.createInvalidResponseError = createInvalidResponseError;
exports.throw_unless_function = throw_unless_function;