export default (str:string):string => {
    /* let arr = str.split(' ');
    let result = arr.map(item => {
        return item.split('').reverse().join('');
    });
    return result.join(' ') */

    return str.split(' ').map((item)=>{
        return item.split('').reverse().join('')
    }).join(' ')
}


/**
 * 557. Reverse Words in a String III
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */