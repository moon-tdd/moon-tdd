export function reduceStackTrace(error: Error, depth: number) {
    depth = depth === undefined ? 1 : depth;
    const errorText = error.message;
    const stack = (error.stack || "").split('\n');
    stack.splice(errorText.split('\n').length, depth);
    error.stack = stack.join("\n");
    return error;
}
