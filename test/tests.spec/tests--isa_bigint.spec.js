const { ensure } = require('../../lib/ensure');
const { isa_bigint } = require('../../lib/tests');

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
ensure(!isa_bigint(varUndefined));
ensure(!isa_bigint(varNull));
ensure(isa_bigint(varBigInt));
ensure(!isa_bigint(varBoolean));
ensure(!isa_bigint(varFunction));
ensure(!isa_bigint(varNumber));
ensure(!isa_bigint(varObject));
ensure(!isa_bigint(varString));
ensure(!isa_bigint(varSymbol));
