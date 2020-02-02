import { ensure } from '../../lib/ensure';
import { is } from "../../lib/tests";
import { prove } from "../../lib/prove";

var axiom_has_run = false;

prove("that axioms are used", ({ axiom }) => {
    axiom(() => {
        axiom_has_run = true;
    });
});

ensure(axiom_has_run, is, true);