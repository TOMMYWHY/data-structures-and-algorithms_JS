"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (str) {
    /* let arr = str.split(' ');
    let result = arr.map(item => {
        return item.split('').reverse().join('');
    });
    return result.join(' ') */
    return str.split(' ').map(function (item) {
        return item.split('').reverse().join('');
    }).join(' ');
});
/**
 * 557. Reverse Words in a String III
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */ 
