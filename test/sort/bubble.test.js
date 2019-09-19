import bubble from '../../dist/sort/bubble'
import select from '../../dist/sort/select'

test(' sort',()=>{
    // expect(bubble([1,3,5,-1])).toEqual([-1,1,3,5]);
    expect(select([1,3,5,-1])).toEqual([-1,1,3,5]);
})