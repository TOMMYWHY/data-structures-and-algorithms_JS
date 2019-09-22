"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KthLargestElementArray;
function KthLargestElementArray(arr, k) {
    // arr.sort((a,b)=>b-a);
    // let result = arr[k-1];
    for (var i = arr.length - 1; i > arr.length - k; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    var result = arr[arr.length - k - 1];
    return result;
}
