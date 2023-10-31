# JS Playground

My JavaScript playground for CodeWars katas with JavaScript.

## Dependencies

[Install node.js using nvm.](https://github.com/nvm-sh/nvm#install--update-script)

It sould look like 

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
```

Then check for the latest versions

```
nvm ls-remote | grep LTS | tail -n 10
```

Install and set e.g. LTS v20:

```
nvm install 20
nvm use 20
```

## Testing boilerplate

> Provide quick boilerplate to test javascript function. More than once occurrence of a character in string function as a tested function, few tests and how to run it.

Here is a simple boilerplate to test a JavaScript function using Node.js and Jest testing framework. 

First, install Jest using npm (Node Package Manager):

```bash
npm install --save-dev jest
```

Then, create a file named `stringUtils.js` for the function to be tested:

```javascript
function moreThanOnceOccurrence(str, char) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === char) count++;
    }
    return count > 1;
}

module.exports = moreThanOnceOccurrence;
```

Next, create a test file named `stringUtils.test.js`:

```javascript
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
```

To run the tests, add the following to your `package.json`:

```json
"scripts": {
    "test": "jest"
}
```

Then, you can run your tests using npm:

```bash
npm run test
```

This will run the Jest test runner on your test suite, and you'll see output for each of your tests.
