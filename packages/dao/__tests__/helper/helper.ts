export const errorPromise = (msg) => {
    return new Promise((resovle, reject) => {
        reject(msg);
    });
}

export function* indexGenerator(maxItems) {
    let index = 0;
    while (index < maxItems) {
        yield index;
        index++;
    }
}
