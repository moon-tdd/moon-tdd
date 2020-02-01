const { ensure } = require('../../lib/ensure');
const { is_truthy } = require('../../lib/tests');

// The ensure function has an internal version of is_truthy, 
// that way we can verify if the public `is_truthy` is valid.

ensure(is_truthy(true));
ensure(is_truthy(1));
ensure(is_truthy("0"));
ensure(is_truthy("1"));
ensure(is_truthy("hello"));
ensure(is_truthy([]));
ensure(is_truthy({}));

// Negative cases
ensure(!is_truthy(0));
ensure(!is_truthy(""));
ensure(!is_truthy(null));
ensure(!is_truthy(undefined));