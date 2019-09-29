import sort,{NodeList} from '../../dist/chain/sortList_148'


test('sortList_148:1',()=>{
    let head = new NodeList([4,1,3,2,7,9,6,5,8])
    sort(head)
    let res = []
    let next = head
    while(next){
        res.push(next.val)
        next = next.next
    }
    expect(res).toEqual([1,2,3,4,5,6,7,8,9])
}) 