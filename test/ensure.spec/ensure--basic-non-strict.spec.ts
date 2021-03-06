import { ensure } from '../../lib/ensure';

// Helper function
function should_fail(value: any) {
    try {
        ensure(value); // Should fail
        throw new Error(`The code \`ensure(${value})\` should throw`);
    } catch {
        // Pass
    }
}

// SUCCESSES
ensure(1);              // Pass
ensure(-1);             // Pass
ensure("pass");         // Pass
ensure({});             // Pass, empty object
ensure([]);             // Pass, empty array
ensure(console.log);    // Pass, a function

// FAILURES
should_fail(0);             // Fail
should_fail(0.0);           // Fail
should_fail('');            // Fail
should_fail('0');           // Fail
should_fail(undefined);     // Fail
should_fail(null);          // Fail