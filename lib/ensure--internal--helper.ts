import { reduceStackTrace } from './internal/error-helper';

type NamedFunction = Function & { name: string };

export function getFunctionName(func: Function | NamedFunction) {
    return (func as NamedFunction).name || func.toString();
}

export function throw_unless_function(test: any) {
    const testType = typeof test;
    if (testType === "function") return;

    throw new Error(`${test} is not a function, but a ${testType}`);
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

