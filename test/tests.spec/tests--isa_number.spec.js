const { ensure } = require('../../lib/ensure');
const { isa_number } = require('../../lib/tests');

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
ensure(!isa_number(varUndefined));
ensure(!isa_number(varNull));
ensure(!isa_number(varBigInt));
ensure(!isa_number(varBoolean));
ensure(!isa_number(varFunction));
ensure(isa_number(varNumber));
ensure(!isa_number(varObject));
ensure(!isa_number(varString));
ensure(!isa_number(varSymbol));
