import { ensure } from '../../lib/ensure';
import { prove } from "../../lib/prove";
import { is, isa_object, has_length_of, is_instance_of } from "../../lib/tests";

// Should execute the body
const basicReport = prove("name of proof", () => { });

ensure(basicReport, isa_object);
ensure(basicReport.state, is, 'pass');
ensure(basicReport.name, is, "name of proof");
ensure(basicReport.issues, is_instance_of, Array);
ensure(basicReport.issues, has_length_of, 0);