export default function iterateThroughObject(reportWithIterator) {
    let result = '';
    for (const employee of reportWithIterator) {
        result += employee + ' | ';
    }
    // Remove the trailing ' | ' before returning the result
    return result.slice(0, -3);
}