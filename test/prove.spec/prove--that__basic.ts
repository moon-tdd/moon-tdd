import { ensure } from '../../lib/ensure';
import { is } from "../../lib/tests";
import { prove } from "../../lib/prove";
import { should_throw } from '../helper';

var that_has_run = false;

prove("prove itself", ({ that }) => {
    that("runs that", () => {
        that_has_run = true;
    });
});

ensure(that_has_run, is, true);