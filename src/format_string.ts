export function format(str: string, ...args: any[]) {
    for (let i = 0; i < args.length; i++) {
        str = str.replace('{' + i + '}', args[i]);
    }
    return str;
}
