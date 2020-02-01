const { ensure } = require('../../lib/ensure');
const { isa_object } = require('../../lib/tests');

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
ensure(!isa_object(varUndefined));
ensure(isa_object(varNull)); // Yes, null is an object
ensure(!isa_object(varBigInt));
ensure(!isa_object(varBoolean));
ensure(!isa_object(varFunction));
ensure(!isa_object(varNumber));
ensure(isa_object(varObject));
ensure(!isa_object(varString));
ensure(!isa_object(varSymbol));
