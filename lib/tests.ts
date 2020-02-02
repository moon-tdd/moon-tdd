/**
 * @file Contains the boolean tests
 */

export function is(v, o) { return v === o; };
export function is_not(v, o) { return v !== o; };

export function is_truthy(v) { return !!v; };
export function is_falsy(v) { return !v; };

export function is_null(v) { return v === null; }
export function is_undefined(v) { return v === undefined; }

export function isa_string(v) { return typeof v === "string"; };
export function isa_boolean(v) { return typeof v === "boolean"; };
export function isa_function(v) { return typeof v === "function"; };
export function isa_number(v) { return typeof v === "number"; };
export function isa_object(v) { return typeof v === "object"; };
export function isa_symbol(v) { return typeof v === "symbol"; };

export function is_instance_of(v, t) { return v instanceof t; }