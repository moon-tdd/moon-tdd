import { getFunctionName } from "./functions";

export function reduceStackTrace(error: Error, depth: number) {
    depth = depth === undefined ? 1 : depth;
    const errorText = error.message;
    const stack = (error.stack || "").split('\n');
    stack.splice(errorText.split('\n').length, depth);
    error.stack = stack.join("\n");
    return error;
}

export function createEnsureError(value: any, test: Function, ...others: any[]) {
    // Make the arguments a wrapped string
    const others_str = others.map(x => `\`${x}\``);
    const errorMessage = `Failed to ensure \`${value}\` ${getFunctionName(test)} ${others_str}`.trim();
    return reduceStackTrace(new Error(errorMessage), 2);
}

export function createInvalidResponseError(test: Function, testResultType: string) {
    const errorText = `The test \`${getFunctionName(test)}\` must return a Boolean and not a ${testResultType}`;
    throw reduceStackTrace(new Error(errorText), 2);
}
