type NamedFunction = Function & { name: string };

export function getFunctionName(func: Function | NamedFunction) {
    return (func as NamedFunction).name || func.toString();
}