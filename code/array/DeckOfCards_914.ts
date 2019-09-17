export default deckOfCards;

function deckOfCards(arr:number[]) {
    arr.sort((a, b) => { return a - b });
    let min: number = Number.MAX_SAFE_INTEGER;
    let dst = [] //分组 
    let result: boolean = true;
    for (let i = 0, temp:any = []; i < arr.length; i++) {
        temp.push(arr[i]);
        for (let j = i + 1; j < arr.length - 1; i++) {
            if (arr[i] === arr[j]) {
                temp.push(arr[j])
            }else{
                if(min>temp.length){
                    min = temp.length;
                }
                dst.push([].concat(temp))
                temp.length= 0;
                i=j;
                break;
            }
        }
    }
    dst.every(item=>{
        if(item.length%min !==0){
            result = false;
            return false;
        }
    })
    return result;
}


