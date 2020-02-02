import { ensure } from '../../lib/ensure';
import { should_throw } from '../helper';

// Test if it accepts arguments
ensure(undefined, () => true);
should_throw(() => ensure(undefined, () => false));

// Should provide the input value to the function
const fakeObject = { answer: 42 };
ensure(fakeObject, (v: any) => v === fakeObject);
ensure({}, (v: any) => v !== fakeObject);

// Should work with arguments
const is_more_than = (v: number, sv: number) => v > sv;
const is_less_than = (v: number, sv: number) => v < sv;
ensure(2, is_less_than, 3);
should_throw(() => ensure(2, is_more_than, 3));