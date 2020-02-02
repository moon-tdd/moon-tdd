import { ensure } from '../../lib/ensure';
import { isa_boolean } from '../../lib/tests';

const varUndefined = undefined;
const varNull = null;
const varBoolean = true;
const varFunction = () => { };
const varNumber = 0;
const varObject = {};
const varString = "";
const varSymbol = Symbol();


// Prose form
ensure(!isa_boolean(varUndefined));
ensure(!isa_boolean(varNull));
ensure(isa_boolean(varBoolean));
ensure(!isa_boolean(varFunction));
ensure(!isa_boolean(varNumber));
ensure(!isa_boolean(varObject));
ensure(!isa_boolean(varString));
ensure(!isa_boolean(varSymbol));
