import { ensure } from '../../lib/ensure';
import { isa_function } from '../../lib/tests';

const varUndefined = undefined;
const varNull = null;
const varBoolean = true;
const varFunction = () => { };
const varNumber = 0;
const varObject = {};
const varString = "";
const varSymbol = Symbol();


// Prose form
ensure(!isa_function(varUndefined));
ensure(!isa_function(varNull));
ensure(!isa_function(varBoolean));
ensure(isa_function(varFunction));
ensure(!isa_function(varNumber));
ensure(!isa_function(varObject));
ensure(!isa_function(varString));
ensure(!isa_function(varSymbol));
