const moreThanOne = require('./stringUtils');

test('moreThanOnceOccurrence function exists', () => {
    expect(typeof moreThanOne).toEqual('function');
});

test('character "a" occurs more than once in "banana"', () => {
    expect(moreThanOne('a', 'banana')).toBeTruthy();
});

test('character "b" does not occur more than once in "banana"', () => {
    expect(moreThanOne('b', 'banana')).toBeFalsy();
});
