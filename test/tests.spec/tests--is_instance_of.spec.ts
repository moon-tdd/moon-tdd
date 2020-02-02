import { ensure } from '../../lib/ensure';
import { is_instance_of } from '../../lib/tests';
import { should_throw } from '../helper';

// Good cases
ensure(new Date(), is_instance_of, Date);
ensure(new String("Hello"), is_instance_of, String);

// Bad cases
should_throw(() => { ensure(new Date(), is_instance_of, String); });
should_throw(() => { ensure("Hello", is_instance_of, String); });