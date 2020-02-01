function throw_unless_function(test) {
    const testType = typeof test;
    if (testType === "function") return;

    throw new Error(`${test} is not a function, but a ${testType}`);
}

function createEnsureError(value, test, ...others) {
    const errorText = test.name || test.toString();

    // Make the arguments a wrapped string
    others_str = others.map(x => `\`${x}\``);
    var err = new Error(`Failed to ensure \`${value}\` ${errorText} ${others_str}`.trim());
    const stack = err.stack.split('\n');
    stack.splice(1, 2);
    err.stack = stack.join("\n");
    return err;
}

exports.createEnsureError = createEnsureError;
exports.throw_unless_function = throw_unless_function;