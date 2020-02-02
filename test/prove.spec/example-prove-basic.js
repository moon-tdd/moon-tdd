const { ensure } = require('../../lib/ensure');
const listOfNames = ["Wouter", "Rutger"];
function include(v, o) { v.includes(o); }

prove("that the list is complete", ({ that }) => {
    that("wouter is on the list", () => {
        ensure(listOfNames, include, "Wouter");
    });

    that("rutger is on the list", () => {
        ensure(listOfNames, include, "Rutger");
    });
});