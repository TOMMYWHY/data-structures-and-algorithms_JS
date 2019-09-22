"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = baseballGame;
function baseballGame(arr) {
    var result = [];
    var pre1;
    var pre2;
    arr.forEach(function (item) {
        switch (item) {
            case 'C':
                if (result.length) {
                    result.pop();
                }
                break;
            case 'D':
                pre1 = result.pop();
                result.push(pre1, pre1 * 2);
                break;
            case '+':
                pre1 = result.pop();
                pre2 = result.pop();
                result.push(pre2, pre1, pre1 + pre2);
                break;
            default:
                result.push(item * 1);
                break;
        }
    });
    return result.reduce(function (total, num) { return total + num; });
}
