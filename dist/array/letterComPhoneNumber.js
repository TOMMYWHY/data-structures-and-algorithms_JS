"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (str) {
    var map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    var num = str.split("");
    var code = [];
    num.forEach(function (item) {
        if (map[item]) {
            code.push(map[item]);
        }
    });
    var comb = function (arr) {
        var temp = [];
        for (var i = 0; i < arr[0].length; i++) {
            for (var j = 0; j < arr[1].length; j++) {
                temp.push("" + arr[0][i] + arr[1][j]);
            }
        }
        arr.splice(0, 2, temp); //将 0 1替换 temp
        if (arr.length > 1) {
            comb(arr);
        }
        else {
            return temp;
        }
        return arr[0];
    };
    return comb(code);
});
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
