const { ensure } = require('../lib/ensure');
ensure(true); // Pass

try {
    ensure(false); // Should fail
    throw new Error("The code `ensure(false)` should throw but it did not");
} catch {
    // Pass
}