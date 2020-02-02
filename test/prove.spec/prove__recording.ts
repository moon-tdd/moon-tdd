import { ensure } from '../../lib/ensure';
import { is, is_instance_of } from '../../lib/tests';
import { prove } from "../../lib/prove";

let ranValidProof = false;
const validProofRecording = prove("valid proof", () => {
    ranValidProof = true;
});
ensure(ranValidProof, is, true);

ensure(validProofRecording.name, is, "valid proof");
ensure(validProofRecording.issues, is_instance_of, Array);
ensure(validProofRecording.issues.length, is, 0);



