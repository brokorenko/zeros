module.exports = function getZerosCount(number) {

    let count = 0;
    let x = 1;

    while (x <= number) {
        x *= 5;
        count += Math.floor(number / x);
    }

    return count;
}
