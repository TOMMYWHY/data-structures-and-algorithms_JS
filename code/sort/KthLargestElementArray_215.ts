export default KthLargestElementArray;
function KthLargestElementArray(arr: number[], k: number) {
    // arr.sort((a,b)=>b-a);
    // let result = arr[k-1];

    for (let i = arr.length - 1; i > arr.length - k; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    let result = arr[arr.length - k-1];
    return result;
}