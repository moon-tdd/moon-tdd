const { ensure } = require('../../lib/ensure');
const { is } = require('../../lib/tests');
const { prove } = require('../../lib/prove');
const { should_throw } = require('../helper');

ensure(
    should_throw(() => prove()).message,
    is, "A proof must have two arguments: A name and a function that proves");
ensure(
    should_throw(() => prove("no_func")).message,
    is, "A proof must have two arguments: A name and a function that proves");
ensure(
    should_throw(() => prove(undefined, () => { })).message,
    is, "A proof must have two arguments: A name and a function that proves");

prove("a valid proof", () => {/* Function body */ });