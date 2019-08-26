import revertByWorld from '../../dist/string/lesson1';

test('revertByWorld: hello tommy ~!', () => {
    expect(revertByWorld('123 456 789')).toBe('321 654 987')
})
