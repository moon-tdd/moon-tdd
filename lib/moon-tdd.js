const is_truthy = ((v) => v);
function createEnsureError(value, test, ...others) {
    const errorText = test.name || test.toString();

    // Make the arguments a wrapped string
    var err = new Error(`Failed to ensure \`${value}\` ${errorText} \`${others}\``);
    const stack = err.stack.split('\n');
    stack.splice(1, 2);
    err.stack = stack.join("\n");
    return err;
}
function throw_unless_function(test) {
    const testType = typeof test;
    if (testType === "function") return;

    throw new Error(`${test} is not a function, but a ${testType}`);
}

function ensure(value, test, ...others) {
    test = test || is_truthy;
    throw_unless_function(test);

    if (test(value, ...others)) return;

    throw createEnsureError(value, test, ...others);
}

exports.ensure = ensure;