import { ensure } from '../../lib/ensure';
import { is, isa_object, is_instance_of, has_length_of } from "../../lib/tests";
import { prove } from "../../lib/prove";

const fakeError = new Error("Simulated error");
// Should execute the body
const errorReport = prove("proof that throws", () => {
    throw fakeError;
});

ensure(errorReport, isa_object);
ensure(errorReport.state, is, 'error');
ensure(errorReport.name, is, "proof that throws");
ensure(errorReport.issues, is_instance_of, Array);
ensure(errorReport.issues, has_length_of, 1);

// Inspect the issue
ensure(errorReport.issues[0].type, is, 'error');
ensure(errorReport.issues[0].error, is, fakeError);