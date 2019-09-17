function reserveEachCharacter(str: string) {
    /* let arr = str.split(' ');
    let result = arr.map(item => {
        return item.split('').reverse().join('');
    });
    return result.join(' ') */

    return str.split(' ').map((item) => {
        return item.split('').reverse().join('')
    }).join(' ')
}


function reserveWords(str: string) {
    // let arr: string[] = str.split(' ');
    let arr = [];
    for(let i =0;i<str.length-1; i++){
        if( str.substring(i) == " "){
            break;
        }else{
            arr.push(str.substring(i))
        };
    }
    return arr;
    // return arr.reverse().join(" ");
    // let reversedArr = arr.reverse();

}

export default reserveEachCharacter;

/**
 * 557. Reverse Words in a String III
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */