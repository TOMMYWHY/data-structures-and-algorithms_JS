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
/**
 * prime numbers
 * 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
 */ 
//# sourceMappingURL=prime.js.map