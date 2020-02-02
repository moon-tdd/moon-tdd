import { ensure } from '../../lib/ensure';
import { isa_symbol } from '../../lib/tests';

const varUndefined = undefined;
const varNull = null;
const varBoolean = true;
const varFunction = () => { };
const varNumber = 0;
const varObject = {};
const varString = "";
const varSymbol = Symbol();


// Prose form
ensure(!isa_symbol(varUndefined));
ensure(!isa_symbol(varNull));
ensure(!isa_symbol(varBoolean));
ensure(!isa_symbol(varFunction));
ensure(!isa_symbol(varNumber));
ensure(!isa_symbol(varObject));
ensure(!isa_symbol(varString));
ensure(isa_symbol(varSymbol));
