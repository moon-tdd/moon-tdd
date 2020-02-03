/**
 * @file Contains the boolean tests
 */

export function is(v: any, o: any) { return v === o; };
export function is_not(v: any, o: any) { return v !== o; };

export function is_truthy(v: any) { return !!v; };
export function is_falsy(v: any) { return !v; };

export function is_null(v: any) { return v === null; }
export function is_undefined(v: any) { return v === undefined; }

export function isa_string(v: any) { return typeof v === "string"; };
export function isa_boolean(v: any) { return typeof v === "boolean"; };
export function isa_function(v: any) { return typeof v === "function"; };
export function isa_number(v: any) { return typeof v === "number"; };
export function isa_object(v: any) { return typeof v === "object"; };
export function isa_symbol(v: any) { return typeof v === "symbol"; };

export function is_instance_of(v: any, t: FunctionConstructor) { return v instanceof t; }

export function has_length_of(v: { length: number }, o: number) {
    if (v === null) return false;
    if (!(typeof v === "object" || typeof v === "string")) return false;
    if (typeof v['length'] !== "number") return false;

    return v.length === o;
}