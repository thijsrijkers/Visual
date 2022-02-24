# Visual
[![NPM version](https://img.shields.io/npm/v/visualgit.svg)](https://www.npmjs.com/package/visualgit)

Represent the current state of a application based on selected git branch

## Use
To use Visual you need to pull the repo/add the NPM package. In your package.json you need to add the following field:
```JSON
  "target": "",
  ```
  In this "target" field you will put your git.ssh link. After this you need to run:
```Typescript
npm run start
```
This will clone/pull the repo and will try to start the application.

IMPORTANT:

You need to have a valid start command in your own package.json before the application will run with Visual. For example:
``` JSON
 "scripts": {
    "start": "node index.js"
  },
 ```
