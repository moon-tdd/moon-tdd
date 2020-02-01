const { ensure } = require('../../lib/ensure');
const { is_undefined } = require('../../lib/tests');

const varUndefined = undefined;
const varNull = null;
const varBigInt = 0n;
const varBoolean = true;
const varFunction = () => { };
const varNumber = 0;
const varObject = {};
const varString = "";
const varSymbol = Symbol();


// Prose form
ensure(is_undefined(varUndefined));
ensure(!is_undefined(varNull));
ensure(!is_undefined(varBigInt));
ensure(!is_undefined(varBoolean));
ensure(!is_undefined(varFunction));
ensure(!is_undefined(varNumber));
ensure(!is_undefined(varObject));
ensure(!is_undefined(varString));
ensure(!is_undefined(varSymbol));
