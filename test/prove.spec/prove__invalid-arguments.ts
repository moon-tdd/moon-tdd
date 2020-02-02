import { ensure } from '../../lib/ensure';
import { is } from "../../lib/tests";
import { prove } from "../../lib/prove";
import { should_throw } from '../helper';

ensure(
    should_throw(() => prove(undefined as any, undefined as any)).message,
    is, "A proof must have two arguments: A name and a function that proves");
ensure(
    should_throw(() => prove("no_func", undefined as any)).message,
    is, "A proof must have two arguments: A name and a function that proves");
ensure(
    should_throw(() => prove(undefined as any, () => { })).message,
    is, "A proof must have two arguments: A name and a function that proves");

prove("a valid proof", () => {/* Function body */ });