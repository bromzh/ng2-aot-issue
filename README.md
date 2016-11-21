## How to reproduce compilation issue

### Case 1: `npm link`

#### How to reproduce.
##### Ensure that AOT works.

**Step 1.** Build a lib
```
cd ng2-lib
npm i
npm run build
```

**Step 2.** Then build an app
```
cd ../ng2-app
npm i
npm run aot
```

It must be ends succesfully.

##### Crashing compilation

**Step 3.** Link the lib
```
cd ng2-lib
npm link
```

**Step 4.** And plug linked lib
```
cd ../ng2-app
npm link ng2-lib
npm run aot
```

Compilation crashes.

### Case 2: Different dependencies
You have different deps versions in your lib and app.
When you install lib dependency, there are _node_modules_

#### How to reproduce
##### Ensure that AOT works

**Step 1.** Build a lib
```
cd ng2-lib
npm i
npm run build
```

**Step 2.** build an app
```
cd ../ng2-app
npm i
npm run aot
```

It must be ends succesfully.

##### Crashing compilation

**Step 3.** Change lib's dependencies. For example, you may checkout to **deps** branch:
```
git checkout deps
cd ng2-lib
rm -rf node_nodules
npm run clean
npm i
npm run build
```

**Step 4.** Re-install lib
```
cd ../ng2-app
npm run clean
npm i
npm run aot
```

For now you have 2 _node_modules_ directories with angular 2 modules:

1. In your app: _ng2-app/node_modules/@angular/core_. Version - 2.2.1.
2. In your lib: _ng2-app/node_modules/ng2-app/node_modules/@angular/core_ . Version - 2.2.0.

Compilation crashes.

**Step 4.1.** But if remove _ng2-app/node_modules/ng2-lib/node_nodules_ directory, compilation returns to normal:
```
rm -rf node_nodules/ng2-lib/node_modules
npm run aot
```

_**In this case compilation still crashes even if we have same deps versions for lib and app, but lib contains `node_modules` directory**_. Details in 3rd case.


### Case 3: lib and app have same deps versions but lib have inner _node_modules_ dir
_Compilation crashes even if you has same deps for app and lib_, but for some reasons you have inner _node_modules_ in lib. For example, this may occurs when you update deps versions in app or lib, but didn't clean app's _node_modules_ dir after this.

#### How to reproduce

**Step 1.** First, reproduce 2nd case until step 4 (without 4.1)

**Step 2.** Change app deps versions
```
cd ng2-app
sed -i -e 's/2.2.1/2.2.0/g' package.json # or whatever
npm i
npm run aot
```

For now you have 2 _node_modules_ directories with angular 2 modules:

1. In your app: _ng2-app/node_modules/@angular/core_. Version - 2.2.0.
2. In your lib: _ng2-app/node_modules/ng2-app/node_modules/@angular/core_. Version - 2.2.0.

Compilation crashes.
