const { ensure } = require('../../lib/ensure');
const { is } = require('../../lib/tests');
const { prove } = require('../../lib/prove');
const { should_throw } = require('../helper');

var that_has_run = false;

prove("prove itself", ({ that }) => {
    that("runs that", () => {
        that_has_run = true;
    });
});

ensure(that_has_run, is, true);