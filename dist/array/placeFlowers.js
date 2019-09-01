"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (arr, n) {
    var max = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] === 0) {
            if (i === 0 && arr[1] === 0) {
                max++;
                i++;
            }
            else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
                max++;
                i++;
            }
        }
    }
    return max >= n;
});
