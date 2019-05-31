const challenge2 = require('../script/challenge2');

test('given empty string, then empty frame', () => {
    expect(challenge2(''))
        .toBe('****\n' +
              '*  *\n' +
              '****\n' );
});

test('given 1 letter string, then frame around letter', () => {
    expect(challenge2('a'))
        .toBe('*****\n' +
              '* a *\n' +
              '*****\n' );
});

test('given 4 letter string, then 2 letters on each row', () => {
    expect(challenge2('a b c d'))
        .toBe('*******\n' +
              '* a b *\n' +
              '* c d *\n' +
              '*******\n' );
});

test('given start with long word, then all small words on same line', () => {
    expect(challenge2('reallyReallyReallyLongWord a b c d e f g h i j k'))
        .toBe('******************************\n' +
              '* reallyReallyReallyLongWord *\n' +
              '* a b c d e f g h i j k      *\n' +
              '******************************\n' );
});

test('given end with long word, then all small words on same line', () => {
    expect(challenge2('a b c d reallyReallyReallyReallyLongWord'))
        .toBe('************************************\n' +
              '* a b c d                          *\n' +
              '* reallyReallyReallyReallyLongWord *\n' +
              '************************************\n' );
});