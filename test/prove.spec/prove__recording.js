const { ensure } = require('../../lib/ensure');
const { is, is_instance_of } = require('../../lib/tests');
const { prove } = require('../../lib/prove');

let ranValidProof = false;
const validProofRecording = prove("valid proof", () => {
    ranValidProof = true;
});
ensure(ranValidProof, is, true);

ensure(validProofRecording.name, is, "valid proof");
ensure(validProofRecording.issues, is_instance_of, Array);
ensure(validProofRecording.issues.length, is, 0);



