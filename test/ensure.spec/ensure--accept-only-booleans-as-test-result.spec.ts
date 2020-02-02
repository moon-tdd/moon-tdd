import { ensure } from '../../lib/ensure';
import { is } from "../../lib/tests";
import { should_throw } from '../helper';

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

function bad_test_number() { return 0; }
function bad_test_string() { return '0'; }
function bad_test_null() { return null; }
function bad_test_undefined() { return undefined; }
function bad_test_object() { return {}; }
function bad_test_array() { return []; }
function bad_test_function() { return () => { }; }

ensure(should_throw(() => ensure(false, bad_test_number)).message, is, "The test `bad_test_number` must return a Boolean and not a number");
ensure(should_throw(() => ensure(false, bad_test_string)).message, is, "The test `bad_test_string` must return a Boolean and not a string");
ensure(should_throw(() => ensure(false, bad_test_null)).message, is, "The test `bad_test_null` must return a Boolean and not a object");
ensure(should_throw(() => ensure(false, bad_test_undefined)).message, is, "The test `bad_test_undefined` must return a Boolean and not a undefined");
ensure(should_throw(() => ensure(false, bad_test_object)).message, is, "The test `bad_test_object` must return a Boolean and not a object");
ensure(should_throw(() => ensure(false, bad_test_array)).message, is, "The test `bad_test_array` must return a Boolean and not a object");
ensure(should_throw(() => ensure(false, bad_test_function)).message, is, "The test `bad_test_function` must return a Boolean and not a function");
