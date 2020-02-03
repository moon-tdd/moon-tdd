import { ensure } from '../../lib/ensure';
import { is, is_instance_of, has_length_of, isa_object } from "../../lib/tests";
import { prove } from "../../lib/prove";
import { waitFor } from '../helper';

async function prove__report_async_error() {
    // Should execute the body
    const fakeError = new Error("Simulated error");

    const report = await prove("async proof that throws", async () => {
        await waitFor(1);
        throw fakeError;
    });

    ensure(report, isa_object);
    ensure(report.state, is, 'error');
    ensure(report.name, is, "async proof that throws");
    ensure(report.issues, is_instance_of, Array);
    ensure(report.issues, has_length_of, 1);

    // Inspect the issue
    ensure(report.issues[0].type, is, 'error');
    ensure(report.issues[0].error, is, fakeError);
}

prove__report_async_error();