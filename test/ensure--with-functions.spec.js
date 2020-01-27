const { ensure } = require("../lib/moon-tdd");
const { should_throw } = require('./helper');

ensure(undefined, () => true);
should_throw(() => ensure(undefined, () => false));