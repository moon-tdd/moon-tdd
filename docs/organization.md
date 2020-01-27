# Moon TDD

What is Moon TDD?
* A TDD library
* That checks javascript code
* That can run multithreaded
* That allows BDD style checks
* That allows setups
* That allows tear-downs
* That analyzes code-coverage
* That reports errors in the code
* That can run in the browsers


Most of the code follows the `ensure(...)` way of doing things.
Which means that it always accepts either 1 parameter or 2 or more parameters.

If only one parameters is provided it will checked if it is truthy.
If two parameters are passed. 
The second parameter must be a function that will transform the `actual` value.
Any other parameters passed will be added as parameters to the transform function.

The advantage of this method is that is easy to add your own test validations or 
even create complex aggregation tests.


Some examples
```js
ensure(true);           // Pass
ensure(!false);         // Pass
ensure(false, is_falsy); // Pass
ensure(3);              // Pass, with warning
ensure(4, is_positive); // Pass
ensure(42, is, 42);     // Pass
ensure(42, equals, 42); // Pass
ensure("hello world", str_contains, "hello"); // Pass

var containsLetters = function(actual, letter, amount) { 
    return actual
        .split('')
        .filter(x=> letter)
        .length == 2;
}
ensure("hello world", custom_check, "o", 2);  // Pass

var has_3_letter_l_in_it = (actual) => containsLetters(actual, 'l', 3);

ensure("hello world", has_3_letter_l_in_it);
```

