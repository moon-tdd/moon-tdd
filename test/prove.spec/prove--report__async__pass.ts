import { ensure } from '../../lib/ensure';
import { is, isa_object, is_instance_of, has_length_of } from "../../lib/tests";
import { prove } from "../../lib/prove";
import { waitFor } from '../helper';

async function prove__report_async_pass() {
    // Should execute the body
    let proof_executed = false;

    const report = await prove("async prove that passes", async () => {
        await waitFor(1);
        proof_executed = true;
    });

    ensure(proof_executed, is, true);

    ensure(report, isa_object);
    ensure(report.state, is, 'pass');
    ensure(report.name, is, "async prove that passes");
    ensure(report.issues, is_instance_of, Array);
    ensure(report.issues, has_length_of, 0);
}

prove__report_async_pass();