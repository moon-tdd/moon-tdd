import { ensure } from '../../lib/ensure';
import { is, isa_object } from "../../lib/tests";
import { prove } from "../../lib/prove";

// Should execute the body
const errorReport = prove("proof that throws", () => {
    throw new Error("Simulated error");
});

ensure(errorReport, isa_object);
ensure(errorReport.state, is, 'error');
ensure(errorReport.name, is, "proof that throws");