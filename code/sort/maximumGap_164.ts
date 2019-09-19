export default maximumGap;


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

function maximumGap(arr: number[]): number {
    if (arr.length < 2) {
        return 0;
    }
    let gap = 0;
    for (let i = arr.length - 1; i>0 ; i--) {
        for (let j = 0; j < i; j++) {
            // let temp_gap = 0;
            if (arr[j] - arr[j + 1] > 0) {
                // temp_gap =  arr[j] - arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
        if (arr[i + 1] - arr[i] > gap) {
            gap = arr[i + 1] - arr[i]
        }
    }
    return gap;
}