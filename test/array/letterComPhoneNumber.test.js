import telComb from '../../dist/array/letterComPhoneNumber';

test('telComb:23', () => {
    expect(telComb('23')).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
})
// https://leetcode.com/problems/can-place-flowers/