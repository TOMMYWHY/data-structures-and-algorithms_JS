import maximalRectangle from "../../dist/stack/maximalRectangle_85"

test("maximalRectangle_85",()=>{
    let input = [
        ["1","0","1","0","0"],
        ["1","0","1","1","1"],
        ["1","1","1","1","1"],
        ["1","0","0","1","0"]
      ]
    expect(maximalRectangle(input)).toBe(6)
}) 