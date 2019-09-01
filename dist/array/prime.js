"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayPrimes(total) {
    var primeArr = [];
    for (var i = 2; i <= total; i++) {
        var isNotPrime = false;
        for (var j = 2; j <= (i - 1); j++) {
            if (i % j === 0) {
                isNotPrime = true;
                break;
            }
        }
        if (isNotPrime == false) {
            primeArr.push(i);
        }
    }
    return primeArr.toString();
}
exports.default = arrayPrimes;
