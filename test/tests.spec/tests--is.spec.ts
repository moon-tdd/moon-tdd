import { ensure } from '../../lib/ensure';
import { is } from '../../lib/tests';

const exampleArray: any[] = [];
const exampleObject = {};

// Testing it in the prose like way
ensure(0, is, 0);
ensure("Hello", is, "Hello");
ensure(null, is, null);
ensure(undefined, is, undefined);
ensure(exampleArray, is, exampleArray);
ensure(exampleObject, is, exampleObject);
ensure(console.log, is, console.log);

// Testing in the assert way
ensure(is(0, 0));
ensure(is("Hello", "Hello"));
ensure(is(null, null));
ensure(is(undefined, undefined));
ensure(is(exampleArray, exampleArray));
ensure(is(exampleObject, exampleObject));
ensure(is(console.log, console.log));

// Testing negative cases
ensure(!is(0, "0"));
ensure(!is(null, undefined));
ensure(!is(exampleArray, []));
ensure(!is(exampleObject, {}));
ensure(!is(console.log, console.error));
