"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = deckOfCards;
function deckOfCards(arr) {
    arr.sort(function (a, b) { return a - b; });
    var min = Number.MAX_SAFE_INTEGER;
    var dst = []; //分组 
    var result = true;
    for (var i = 0, temp = []; i < arr.length; i++) {
        temp.push(arr[i]);
        for (var j = i + 1; j < arr.length - 1; i++) {
            if (arr[i] === arr[j]) {
                temp.push(arr[j]);
            }
            else {
                if (min > temp.length) {
                    min = temp.length;
                }
                dst.push([].concat(temp));
                temp.length = 0;
                i = j;
                break;
            }
        }
    }
    dst.every(function (item) {
        if (item.length % min !== 0) {
            result = false;
            return false;
        }
    });
    return result;
}
