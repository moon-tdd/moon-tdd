const { ensure } = require("../../lib/ensure");
const { should_throw } = require('../helper');

// Test if it accepts arguments
ensure(undefined, () => true);
should_throw(() => ensure(undefined, () => false));

// Should provide the input value to the function
const fakeObject = { answer: 42 };
ensure(fakeObject, (v) => v === fakeObject);
ensure({}, (v) => v !== fakeObject);

// Should work with arguments
const is_more_than = (v, sv) => v > sv;
const is_less_than = (v, sv) => v < sv;
ensure(2, is_less_than, 3);
should_throw(() => ensure(2, is_more_than, 3));