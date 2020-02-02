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
    var err = new Error(errorMessage);
    const stack = err.stack.split('\n');
    stack.splice(errorMessage.split('\n').length, 2);
    err.stack = stack.join("\n");
    return err;
}

function createInvalidResponseError(test, testResultType) {
    const errorText = `The test \`${test.name || test.toString()}\` must return a Boolean and not a ${testResultType}`;
    const badTestTypeError = new Error(errorText);
    const stack = badTestTypeError.stack.split('\n');
    stack.splice(errorText.split('\n').length, 2);
    badTestTypeError.stack = stack.join("\n");
    throw badTestTypeError;
}

exports.createEnsureError = createEnsureError;
exports.createInvalidResponseError = createInvalidResponseError;
exports.throw_unless_function = throw_unless_function;