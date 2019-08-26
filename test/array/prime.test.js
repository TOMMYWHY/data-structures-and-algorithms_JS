import arrayPrimes from '../../dist/array/prime';

test('arrayPrimes', () => {
    expect(arrayPrimes(100)).toBe("2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97")
})
