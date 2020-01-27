function should_throw(act) {
    try {
        act(); // Should fail
    } catch {
        // Pass
        return;
    }

    const error = new Error(`The code \`ensure(${act})\` should throw`);
    const stack = error.stack.split('\n');
    stack.splice(1, 1);
    error.stack = stack.join('\n');
    throw error;

}

exports.should_throw = should_throw;