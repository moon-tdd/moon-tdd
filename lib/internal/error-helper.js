/**
 * 
 * @param {Error} error The error 
 * @param {Number} depth The amount of calls that need to be reduced
 */
function reduceStackTrace(error, depth) {
    depth = depth === undefined ? 1 : depth;
    const errorText = error.message;
    const stack = error.stack.split('\n');
    stack.splice(errorText.split('\n').length, depth);
    error.stack = stack.join("\n");
    return error;
}

exports.reduceStackTrace = reduceStackTrace;