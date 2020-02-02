const { ensure } = require("../../lib/ensure");
const { is } = require("../../lib/tests");
const { should_throw } = require('../helper');

// The `ensure` function is an inspect function.
// It accepts a value, an optional test function and optionally a few more 
// arguments if a test function was provided.
// These test functions must return a boolean, they cannot return a promise and a boolean.
// 
// If you have the following code:
// 
//     ensure(Promise.resolve(42), async (v, o)=> { return await v == o; }, 42 )
//
// You must rewrite it as:
//
//     ensure(await Promise.resolve(true), (v, o) => v == o, 42);
//
// This also applies if you need to check some storage mechanism
//
//     async function is_id_in_database(v, table)
//     { 
//         let query = `
//                 SELECT COUNT(1)
//                 FROM ${table} 
//                 WHERE id=?`;
//         let resultPromise = db.asyncQuery(query, v);
//         let queryResult = await resultPromise;       // <-- Notice the await?
//         return queryResult[0] >= 1;                  // <-- So it returns a {Promise<Boolean>}
//     }
// 
//     ensure(42, is_id_in_database, "answers");        // <-- Illegal, because the test-function
//                                                      //     must return a boolean and not a 
//                                                      //     Promise
// However the following is allowed
//
//     ensure(Promise.resolve(42), is_instance_of, Promise);
// 
// Because the test function is not async.
//

function is_async_true(v) {
    return new Promise((resolve) => resolve(v === true));
}

var asyncError = should_throw(() => ensure(false, is_async_true));

ensure(asyncError.message, is, 'The test `is_async_true` must return a Boolean and not a Promise');
