const { ensure } = require('../../lib/ensure');
const { isa_string } = require('../../lib/tests');

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
ensure(!isa_string(varUndefined));
ensure(!isa_string(varNull));
ensure(!isa_string(varBigInt));
ensure(!isa_string(varBoolean));
ensure(!isa_string(varFunction));
ensure(!isa_string(varNumber));
ensure(!isa_string(varObject));
ensure(isa_string(varString));
ensure(!isa_string(varSymbol));
