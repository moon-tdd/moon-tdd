const { ensure } = require('../../lib/ensure');
const { isa_function } = require('../../lib/tests');

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
ensure(!isa_function(varUndefined));
ensure(!isa_function(varNull));
ensure(!isa_function(varBigInt));
ensure(!isa_function(varBoolean));
ensure(isa_function(varFunction));
ensure(!isa_function(varNumber));
ensure(!isa_function(varObject));
ensure(!isa_function(varString));
ensure(!isa_function(varSymbol));
