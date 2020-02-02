import { ensure } from '../../lib/ensure';
import { is_null } from '../../lib/tests';

const varUndefined = undefined;
const varNull = null;
const varBoolean = true;
const varFunction = () => { };
const varNumber = 0;
const varObject = {};
const varString = "";
const varSymbol = Symbol();


// Prose form
ensure(!is_null(varUndefined));
ensure(is_null(varNull));
ensure(!is_null(varBoolean));
ensure(!is_null(varFunction));
ensure(!is_null(varNumber));
ensure(!is_null(varObject));
ensure(!is_null(varString));
ensure(!is_null(varSymbol));
