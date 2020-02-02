const { ensure } = require('../../lib/ensure');
const { is } = require('../../lib/tests');
const { prove } = require('../../lib/prove');

// Should execute the body
let proof_executed = false;
prove("body of proof is run", () => {
    proof_executed = true;
});

ensure(proof_executed, is, true);
