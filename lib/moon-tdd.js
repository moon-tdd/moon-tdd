function ensure(value, test) {
    test = test || ((v) => v);
    if (!test(value)) {
        var err = new Error();
        const stack = err.stack.split('\n');
        stack.splice(1, 1);
        err.stack = stack.join("\n");
        throw err;
    }
}


exports.ensure = ensure;