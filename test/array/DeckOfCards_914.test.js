import cardGroup from "../../dist/array/DeckOfCards_914"

test('cardGroup:[1,2,3,4,4,3,2,1]',()=>{
    expect(cardGroup([1,2,3,4,4,3,2,1])).toBe(true)
})