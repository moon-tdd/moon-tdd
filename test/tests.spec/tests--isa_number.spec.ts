import { ensure } from '../../lib/ensure';
import { isa_number } from '../../lib/tests';

const varUndefined = undefined;
const varNull = null;
const varBoolean = true;
const varFunction = () => { };
const varNumber = 0;
const varObject = {};
const varString = "";
const varSymbol = Symbol();


// Prose form
ensure(!isa_number(varUndefined));
ensure(!isa_number(varNull));
ensure(!isa_number(varBoolean));
ensure(!isa_number(varFunction));
ensure(isa_number(varNumber));
ensure(!isa_number(varObject));
ensure(!isa_number(varString));
ensure(!isa_number(varSymbol));
