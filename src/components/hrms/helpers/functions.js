export const convertFirebaseResultToArray = (result) => {
    let arrayResult = [];
    Object.keys(result).forEach(element => {

        arrayResult.push(result[element]);
    });
    return arrayResult;
}