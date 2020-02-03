import { ensure } from '../../lib/ensure';
import { is, isa_object } from "../../lib/tests";
import { prove } from "../../lib/prove";

// Should execute the body
let proof_executed = false;
let captureContext = undefined;
prove("body of proof is run", (context) => {
    captureContext = context;
    proof_executed = true;
});

ensure(captureContext, isa_object);
ensure(proof_executed, is, true);
