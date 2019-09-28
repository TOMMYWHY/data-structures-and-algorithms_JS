export default maximalRectangle;

function maximalRectangle(arr: any) {
    let result: any = [];
    let reg = /1{2,}/g
    arr = arr.map((item:any) => {
        let str = item.join('');
        let r = reg.exec(str);
        let rs = []
        while (r) {
            rs.push([r.index, r.index + r[0].length - 1])
            r = reg.exec(str)
        }
        return rs;
    })
    let maxRecursion = (arr: any, result: any, n = 1) => {
        let top = arr.pop();
        let next = arr.pop();
        let tt  //第一行 [起点, 终点]
        let nn
        let start // 起始交叉 索引
        let end
        let width = 1;
        let maxWidth = 1;
        n++;
        for (let i = 0; i < top.length; i++) {
            tt = top[i];
            for (let j = 0; j < next.length; j++) {
                nn = next[j]
                width = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0]);
                if (width > maxWidth) {
                    maxWidth = width; //确保 maxwidth 永远最大
                    start = Math.max(tt[0], nn[0])
                    end = Math.min(tt[1], nn[1])
                }
            }
        }
        if (start === undefined || end === undefined) {
            if (n < 3) { //未交叉
                return false;
            } else {
                width = top[0][1] - top[0][0] + 1
                if (width > 1) {
                    result.push((n - 1) * width)
                }
            }
        } else {
            arr.push([[start, end]])
            maxRecursion(arr, result, n++)
        }
    }
    while (arr.length > 1) {
        maxRecursion([].concat(arr), result)
        arr.pop()
    }
    let max = 0;
    let item = result.pop();
    while (item) {
        if (item > max) {
            max = item
        }
        item = result.pop();
    }

    return max > 0 ? max : -1;
}