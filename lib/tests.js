/**
 * @file Contains the boolean tests
 */

exports.is = function is(v, o) { return v === o; };
exports.is_not = function is_not(v, o) { return v !== o; };

exports.is_truthy = function is_truthy(v) { return v; };
exports.is_falsy = function is_falsy(v) { return !v; };

exports.is_null = function is_null(v) { return v === null; }
exports.is_undefined = function is_undefined(v) { return v === undefined; }

exports.isa_string = function isa_string(v) { return typeof v === "string"; };
exports.isa_bigint = function isa_bigint(v) { return typeof v === "bigint"; };
exports.isa_boolean = function isa_boolean(v) { return typeof v === "boolean"; };
exports.isa_function = function isa_function(v) { return typeof v === "function"; };
exports.isa_number = function isa_number(v) { return typeof v === "number"; };
exports.isa_object = function isa_object(v) { return typeof v === "object"; };
exports.isa_symbol = function isa_symbol(v) { return typeof v === "symbol"; };