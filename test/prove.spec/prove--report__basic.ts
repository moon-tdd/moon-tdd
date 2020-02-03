import { ensure } from '../../lib/ensure';
import { is, isa_object } from "../../lib/tests";
import { prove } from "../../lib/prove";

// Should execute the body
const basicReport = prove("name of proof", () => { });
// A prove should always return a report
ensure(basicReport, isa_object);
// A succesfull report should have the state `pass`
ensure(basicReport.state, is, 'pass');
ensure(basicReport.name, is, "name of proof");