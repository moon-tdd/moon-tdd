import { ensure } from '../../lib/ensure';
import { has_length_of } from '../../lib/tests';

// The ensure function has an internal version of is_falsify, 
// that way we can verify if the public `is_falsify` is valid.

ensure(has_length_of([], 0));
ensure(has_length_of("", 0));
ensure(has_length_of({ length: 0 }, 0));

// Negative cases

ensure(!has_length_of([1], 0));
ensure(!has_length_of("a", 2));
ensure(!has_length_of({ length: 1 }, -1));

// Negative cases for when type checking is not available
ensure(!has_length_of(null as any, 0));
ensure(!has_length_of({} as any, 0));