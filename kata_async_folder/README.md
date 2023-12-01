# The task

The Folder class simulates the file system directory. The directory may contain other directories (Folder class objects) or just files (javascript strings).

Your task is to find all files with .js extention. The order of the files doesn’t matter. Execute the callback function exactly once when you are done finding all javascript files.

## Folder Interface

Folder has an asynchronous interface.

```
interface Folder {
  size((len: number) => void);
  read(index: number, (file: Folder | string) => void);
}

root.size((s) => {
  console.log(s); // s === 5
});

// since the folder size is 5 numbers from 0 to 4 are valid indexes
root.read(4, (x) => {
  console.log(x); // x === "8.html"
});
```

## Folder Example

```
root
├── 1.js
├── 2.js
├── foo
│   ├── bar
│   │   └── 3.txt
│   └── 4.js
├── baz
│   ├── 5.png
│   ├── 6.js
│   └── moo
│       └── 7.txt
└── 8.html
const root = Folder([
  "1.js",
  "2.js",
  Folder([
    Folder([
      "3.txt",
    ]),
    "4.js",
  ]),
  Folder([
    "5.png",
    "6.js",
    Folder([
      "7.txt",
    ]),
  ]),
  "8.html",
]);

findAllJavascriptFiles(root, arr => {
  console.log(arr); // arr === ["1.js", "2.js", "4.js", "6.js"]
})
```

## Solution signature

Your task is to fix following:

```
async function findAllJavascriptFiles(folder, callback) {
  callback([]));
}
```

## GPT-4 solution

To fix the provided function, we need to implement a recursive search through the folder structure to find all files with the `.js` extension. We will use the `Folder` interface methods `size` and `read` to traverse the directory structure. Here's the updated function:

```javascript
async function findAllJavascriptFiles(folder, callback) {
  let jsFiles = [];

  // Helper function to recursively search for .js files
  async function searchFolder(currentFolder) {
    return new Promise((resolve, reject) => {
      currentFolder.size(async (len) => {
        let readCount = 0;

        for (let i = 0; i < len; i++) {
          currentFolder.read(i, async (file) => {
            if (typeof file === 'string' && file.endsWith('.js')) {
              jsFiles.push(file);
            } else if (typeof file !== 'string') {
              await searchFolder(file);
            }

            readCount++;
            if (readCount === len) {
              resolve();
            }
          });
        }

        // If the folder is empty, resolve immediately
        if (len === 0) {
          resolve();
        }
      });
    });
  }

  // Start the search from the root folder
  await searchFolder(folder);

  // Execute the callback with the found .js files
  callback(jsFiles);
}
```

This function defines a helper function `searchFolder` that uses recursion to traverse the folder structure. It uses the `size` method to determine the number of items in the current folder and the `read` method to access each item. If the item is a string ending with `.js`, it's added to the `jsFiles` array. If the item is a folder, the function calls itself recursively to search within that folder.

The `searchFolder` function returns a `Promise` that resolves when all items in the current folder have been processed. This ensures that the search is completed before the callback is executed.

Finally, the `findAllJavascriptFiles` function awaits the completion of the `searchFolder` function starting from the root folder and then calls the callback with the array of JavaScript files found.


## My solution

```
function getSize(folder) {
  return new Promise((resolve, reject) => {
    folder.size(function(value) {
      resolve(value);
    });
  });
}

function getItem(folder, i) {
  return new Promise((resolve, reject) => {
    folder.read(i, function(value) {
      resolve(value);
    });
  });
}

async function findJavascriptFiles(folder) {
  let N = await getSize(folder);
  let result = [];
  for (let i=0; i < N; i++) {
    let item = await getItem(folder, i);
    if (typeof item === "string" && item.endsWith(".js")) {
      result.push(item);
    } else if (typeof item === "object") {
      result.push(...await findJavascriptFiles(item))
    }
  }
  return result;
}

async function findAllJavascriptFiles(folder, callback) {
  callback(await findJavascriptFiles(folder));
}
```
