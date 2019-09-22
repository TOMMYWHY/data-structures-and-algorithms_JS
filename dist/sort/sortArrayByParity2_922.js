"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sortArrayByParity;
function sortArrayByParity(arr) {
    arr.sort(function (a, b) { return a - b; });
    var r = [];
    var odd = 1;
    var even = 0;
    arr.forEach(function (item) {
        if (item % 2 === 1) {
            r[odd] = item;
            odd += 2;
        }
        else {
            r[even] = item;
            even += 2;
        }
    });
    return r;
}
