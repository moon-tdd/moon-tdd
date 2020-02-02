import { trapError } from '../../lib/error';
import { ensure } from '../../lib/ensure';
import { is, isa_string, is_instance_of } from '../../lib/tests';

import { should_throw } from '../helper';

const act_throwString = () => { throw "an error string"; };
const act_throwError = () => { throw new Error("an error object"); };
const act_noThrow = () => { return "a valid response, but no error"; };

function starts_with(v: string, str: string) { return v.startsWith(str); }

ensure(trapError(act_throwString), is, "an error string");
ensure(trapError(act_throwString), isa_string);

ensure(trapError(act_throwError), is_instance_of, Error);
ensure(trapError(act_throwError).message, is, "an error object");

const noErrorThrownError = should_throw(() => trapError(act_noThrow));
ensure(noErrorThrownError.message, starts_with, "No errors to trap since none were thrown in `");