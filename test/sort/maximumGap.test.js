import maximumGap from "../../dist/sort/maximumGap_164"
test('MaximumGap',()=>{
    expect(maximumGap([3,6,9,1])).toBe(3)
})

test('MaximumGap',()=>{
    expect(maximumGap([10])).toBe(0)
})

test('MaximumGap',()=>{
    expect(maximumGap([13,16,19,1])).toBe(12)
})