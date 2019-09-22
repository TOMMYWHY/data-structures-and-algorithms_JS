import stack from  '../../dist/stack/baseballGame_682'
test('baseballGame_682',()=>{
    expect(stack(["5","2","C","D","+"])).toBe(30)
}) 

test('baseballGame_682',()=>{
    expect(stack(["5","-2","4","C","D","9","+","+"])).toBe(27)
}) 