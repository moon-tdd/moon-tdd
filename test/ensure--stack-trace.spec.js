const { ensure } = require('../lib/moon-tdd');

function invalid_case() {
    ensure(false);
}

try {
    invalid_case();
    throw new Error("Should not fail");
} catch (ex) {
    var firstFunc = ex.stack.split('\n')[1];
    if (!/ at invalid_case /.test(firstFunc)) {
        throw new Error(`The first function in stack trace should match the test-location`);
    }
}

