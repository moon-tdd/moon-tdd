const { ensure } = require('../../lib/ensure');
const { is_instance_of } = require('../../lib/tests');
const { should_throw } = require('../helper');

// Good cases
ensure(new Date(), is_instance_of, Date);
ensure(new String("Hello"), is_instance_of, String);

// Bad cases
should_throw(() => { ensure(new Date(), is_instance_of, String); });
should_throw(() => { ensure("Hello", is_instance_of, String); });