## How to reproduce

### Case 1: `npm link`
#### Check that AOT works

Build a lib
```
cd ng2-lib
npm i
npm run build
```

Then build an app
```
cd ../ng2-app
npm i
npm run aot
```

It must be ends succesfully

### Breaking compilation

Link the lib
```
cd ng2-lib
npm link
```

And plug linked lib
```
cd ../ng2-app
npm link ng2-lib
npm run aot
```

### Case 2: Different dependencies
### Check that AOT works

Build a lib
```
cd ng2-lib
npm i
npm run build
```

Then build an app
```
cd ../ng2-app
npm i
npm run aot
```

It must be ends succesfully

### Breaking compilation

Change lib's dependencies. For example, you may checkout to **deps** branch:

```
git checkout deps
cd ng2-lib
rm -rf node_nodules
npm run clean
npm i
npm run build
```

Reinstall lib
```
cd ../ng2-app
npm run clean
npm i
npm run aot
```
