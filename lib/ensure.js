const {
    createEnsureError,
    throw_unless_function
} = require('./ensure--internal--helper');


// Internal truthy (don't depend on the external one, 
// since that makes it impossible to verify if that one 
// is broken).
const is_truthy = (v) => v;

function ensure(value, test, ...others) {
    test = test || is_truthy;
    throw_unless_function(test);

    if (test(value, ...others)) return;

    throw createEnsureError(value, test, ...others);
}

exports.ensure = ensure;