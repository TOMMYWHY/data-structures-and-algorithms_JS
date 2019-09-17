import revertByWorld from '../../dist/string/lesson1';

test('revertByWorld: hello tommy ~!', () => {
    expect(revertByWorld("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc")
    // expect(revertByWorld("Let's take LeetCode contest")).toBe("contest LeetCode take Let's")
})
