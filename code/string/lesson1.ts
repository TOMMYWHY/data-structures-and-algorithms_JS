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
