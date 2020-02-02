import { reduceStackTrace } from './internal/error-helper';

export function throw_unless_function(test) {
    const testType = typeof test;
    if (testType === "function") return;

    throw new Error(`${test} is not a function, but a ${testType}`);
}

export function createEnsureError(value, test, ...others) {
    const errorText = test.name || test.toString();

    // Make the arguments a wrapped string
    const others_str = others.map(x => `\`${x}\``);
    const errorMessage = `Failed to ensure \`${value}\` ${errorText} ${others_str}`.trim();
    return reduceStackTrace(new Error(errorMessage), 2);
}

export function createInvalidResponseError(test, testResultType) {
    const errorText = `The test \`${test.name || test.toString()}\` must return a Boolean and not a ${testResultType}`;
    throw reduceStackTrace(new Error(errorText), 2);
}

