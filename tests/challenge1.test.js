const challenge1 = require('../script/challenge1');

test('given 2 empty string, then empty string', () => {
    expect(challenge1('', '')).toBe('');
});

test('given empty string to find, then first string', () => {
    expect(challenge1('first string', '')).toBe('first string');
});

test('given same strings, then string surround by []', () => {
    expect(challenge1('string', 'string')).toBe('[string]');
});

test('given substring, then substrings surround by []', () => {
    expect(challenge1('aaaa string bbbb', 'string')).toBe('aaaa [string] bbbb');
});

test('given many substrings, then substrings surround by []', () => {
    expect(challenge1('She believed', 'He lied')).toBe('S[he] be[lie]ve[d]');
});