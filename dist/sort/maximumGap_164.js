"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = maximumGap;
/* function maximumGap(arr: number[]): number {
    if (arr.length < 2) {
        return 0;
    }
    arr.sort((a, b) => { return a - b })
    let gap = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i+1] - arr[i] > gap){
            gap = arr[i+1] - arr[i];
        }
    }
    return gap;
} */
function maximumGap(arr) {
    if (arr.length < 2) {
        return 0;
    }
    var gap = 0;
    var max = 0;
    for (var i = arr.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            // let temp_gap = 0;
            if (arr[j] - arr[j + 1] > 0) {
                // temp_gap =  arr[j] - arr[j + 1]
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if (i < arr.length - 1) {
            gap = arr[i + 1] - arr[i];
            if (gap > max) {
                max = gap;
            }
        }
        // if (arr[i + 1] - arr[i] > gap) {
        //     gap = arr[i + 1] - arr[i]
        // } 
    }
    return Math.max(max, arr[1] - arr[0]);
}
