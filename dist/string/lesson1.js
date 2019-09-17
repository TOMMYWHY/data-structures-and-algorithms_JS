"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reserveEachCharacter(str) {
    /* let arr = str.split(' ');
    let result = arr.map(item => {
        return item.split('').reverse().join('');
    });
    return result.join(' ') */
    return str.split(' ').map(function (item) {
        return item.split('').reverse().join('');
    }).join(' ');
}
function reserveWords(str) {
    // let arr: string[] = str.split(' ');
    var arr = [];
    for (var i = 0; i < str.length - 1; i++) {
        if (str.substring(i) == " ") {
            break;
        }
        else {
            arr.push(str.substring(i));
        }
        ;
    }
    return arr;
    // return arr.reverse().join(" ");
    // let reversedArr = arr.reverse();
}
exports.default = reserveEachCharacter;
/**
 * 557. Reverse Words in a String III
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */ 
