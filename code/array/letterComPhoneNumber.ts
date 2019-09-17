 export default (str: string) => {
    let map: any = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let num: string[] = str.split("");
    let code: any = [];
    num.forEach(item => {
        if (map[item]) {
            code.push(map[item])
        }
    });
    let comb = (arr: any) => {
        let temp = [];
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                temp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0, 2, temp); //将 0 1替换 temp
        if (arr.length > 1) {
            comb(arr);
        } else {
            return temp;
        }
        return arr[0];  
    }  
    return comb(code);
}  

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/