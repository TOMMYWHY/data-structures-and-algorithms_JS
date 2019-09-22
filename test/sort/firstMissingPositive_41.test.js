import sort from "../../dist/sort/firstMissingPositive_41"

test("firstMissingPositive_41:1",()=>{
    expect(sort([1,2,0])).toBe(3)
}) 

test("firstMissingPositive_41:2",()=>{
    expect(sort([7,8,9,11,12])).toBe(1)
}) 

test("firstMissingPositive_41:3",()=>{
    expect(sort([3,4,-1,1])).toBe(2)
}) 