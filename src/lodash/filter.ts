const filter = <T>(arr: T[], callback: (value: T, index: number, array: T[]) => boolean): T[] => {
    const result: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
};

export default filter;
