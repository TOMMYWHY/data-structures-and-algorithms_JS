"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = firstMissingPositive;
// export default sort;
function firstMissingPositive(arr) {
    arr = arr.filter(function (item) {
        return item > 0;
    });
    if (arr.length > 0) {
        arr.sort(function (a, b) { return a - b; });
        if (arr[0] === 1) {
            for (var i = 0; i < arr.length - 1; i++) {
                if (arr[i + 1] - arr[i] > 1) {
                    return arr[i] + 1;
                }
            }
            return arr.pop() + 1; //arr最后项 +1
        }
        else {
            return 1;
        }
    }
    else {
        return 1;
    }
}
function sort(arr) {
    arr = arr.filter(function (item) {
        return item > 0;
    });
    for (var i = 0; i < arr.length - 1; i++) {
        var minIndex = i;
        for (var j = 0; j < i; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        if (i > 0) {
            if (arr[i] - arr[i - 1]) {
                arr[i - 1] + 1;
            }
        }
        else {
            if (arr[minIndex] !== 1) {
                return 1;
            }
        }
    }
    return arr.length ? arr.pop() + 1 : 1;
}
