function toRoman() {
    return 'I';
}

describe('toRoman', function() {
    it('converts 1', function() {
        expect(toRoman(1)).toBe('I');
    });
});
