const moreThanOnceOccurrence = require('./stringUtils');

test('moreThanOnceOccurrence function exists', () => {
    expect(typeof moreThanOnceOccurrence).toEqual('function');
});

test('character "a" occurs more than once in "banana"', () => {
    expect(moreThanOnceOccurrence('banana', 'a')).toBeTruthy();
});

test('character "b" does not occur more than once in "banana"', () => {
    expect(moreThanOnceOccurrence('banana', 'b')).toBeFalsy();
});
