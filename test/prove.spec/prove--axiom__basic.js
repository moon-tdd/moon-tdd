const { ensure } = require('../../lib/ensure');
const { is } = require('../../lib/tests');
const { prove } = require('../../lib/prove');

var axiom_has_run = false;

prove("that axioms are used", ({ axiom }) => {
    axiom(() => {
        axiom_has_run = true;
    });
});

ensure(axiom_has_run, is, true);