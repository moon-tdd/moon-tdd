const { ensure } = require('../../lib/ensure');
const { is_not } = require('../../lib/ensure--tests');

// Testing it in the prose like way
ensure(0, is_not, 1);
ensure(0, is_not, "0");
ensure(0, is_not, "");
ensure(0, is_not, undefined);
ensure(0, is_not, null);
ensure(0, is_not, []);
ensure(0, is_not, {});
ensure(0, is_not, function () { });

// Testing in the assert way
ensure(is_not(0, 1));
ensure(is_not(0, "0"));
ensure(is_not(0, ""));
ensure(is_not(0, undefined));
ensure(is_not(0, null));
ensure(is_not(0, []));
ensure(is_not(0, {}));
ensure(is_not(0, function () { }));

// Testing negative cases
ensure(!is_not(1, 1));
