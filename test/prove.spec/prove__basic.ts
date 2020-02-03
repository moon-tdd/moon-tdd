import { ensure } from '../../lib/ensure';
import { is } from "../../lib/tests";
import { prove } from "../../lib/prove";

// Should execute the body
let proof_executed = false;
prove("body of proof is run", () => {
    proof_executed = true;
});

ensure(proof_executed, is, true);
