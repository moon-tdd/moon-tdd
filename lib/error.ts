export function trapError(act) {
    try {
        act();
    } catch (error) {
        return error;
    }

    const invalidError = new Error(`No errors to trap since none were thrown in \`${act}\``);
    const stack = (invalidError.stack || "").split('\n');
    stack.splice(1, 1);
    invalidError.stack = stack.join("\n");
    throw invalidError;
}