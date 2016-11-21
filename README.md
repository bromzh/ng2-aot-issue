## How to reproduce

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

It must be finished succesfully

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