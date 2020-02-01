/**
 * @file Contains the boolean tests
 */

exports.is_truthy = function is_truthy(v) { return v; };
exports.is_falsy = function is_falsy(v) { return !v; };
exports.is_not = function is_not(v, o) { return v !== o; };
exports.is = function is(v, o) { return v === o; };