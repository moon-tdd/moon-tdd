import { ensure } from '../../lib/ensure';
import { is, isa_object } from "../../lib/tests";
import { prove } from "../../lib/prove";

// Should execute the body
const basicReport = prove("name of prove", () => { });
ensure(basicReport, isa_object);
