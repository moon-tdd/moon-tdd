import { ensure } from '../../lib/ensure';
import { is_falsy } from '../../lib/tests';

// The ensure function has an internal version of is_falsify, 
// that way we can verify if the public `is_falsify` is valid.


ensure(is_falsy(0));
ensure(is_falsy(""));
ensure(is_falsy(null));
ensure(is_falsy(undefined));

// Negative cases

ensure(!is_falsy(true));
ensure(!is_falsy(1));
ensure(!is_falsy("0"));
ensure(!is_falsy("1"));
ensure(!is_falsy("hello"));
ensure(!is_falsy([]));
ensure(!is_falsy({}));