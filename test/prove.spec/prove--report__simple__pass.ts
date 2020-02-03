import { ensure } from '../../lib/ensure';
import { prove } from "../../lib/prove";
import { is, isa_object, has_length_of, is_instance_of } from "../../lib/tests";

// Should execute the body
const report = prove("name of proof", () => { });

ensure(report, isa_object);
ensure(report.state, is, 'pass');
ensure(report.name, is, "name of proof");
ensure(report.issues, is_instance_of, Array);
ensure(report.issues, has_length_of, 0);