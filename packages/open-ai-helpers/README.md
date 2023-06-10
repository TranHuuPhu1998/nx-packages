# NX

<a role="link" tabindex="0" rel="noopener" target="_blank" href="https://www.google.com/url?sa=i&amp;url=https%3A%2F%2Fgithub.com%2Fnrwl%2Fnx-examples&amp;psig=AOvVaw116bqKN0vm1cvC52SizE1q&amp;ust=1670048048031000&amp;source=images&amp;cd=vfe&amp;ved=0CBAQjRxqFwoTCLC7sfej2vsCFQAAAAAdAAAAABAJ" jsaction="focus:trigger.HTIQtd;mousedown:trigger.HTIQtd;touchstart:trigger.HTIQtd;" aria-label="Visit GitHub" class="eHAdSb" data-ved="0CBAQjRxqFwoTCLC7sfej2vsCFQAAAAAdAAAAABAJ" rlhc="1"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" jsaction="load:XAeZkd;" jsname="HiaYvf" class="n3VNCb KAlRDb" alt="GitHub - nrwl/nx-examples: Example repo for Nx workspace" data-noaft="1" style="width: 634px; height: 394.435px; margin: 0px;"><span class="VSIspc" jsname="eQ3Oyb" style="margin: 0px;"></span></a>

## Create a New Workspace

- Start by creating a new workspace. We can use the following command that will help us set it up.

`npx create-nx-workspace@latest myorg --preset=ts`

## This command

- **myorg** is name of workspace (can you rename for you application)

### Create a Package

### With nx can you help with scaffolding applications

`npx nx generate @nrwl/js:library is-even --publishable --importPath @myorg/is-even`

### This command 2

- Uses the @nrwl/js plugin's library generator to scaffold a new library named is-even.
- The --publishable flag makes sure we also get a package.json generated and a publish target we can invoke to publish to NPM.
- The --importPath allows us to define the name of the NPM package.

### The file structure should look like this

```myorg/
├── dist
├── packages/
├── tools/
├── nx.json
├── package.json
├── README.md
└── tsconfig.base.json
```

### Push your package to NPM
- npm run build is-even
- cd /Users/phutran/Documents/package/myorg/dist/packages/is-even
- update version package => "version": "0.0.3",
- npm publish

  
- npm publish dist/packages/is-odd
- npm publish dist/packages/is-check-size

### Testing

- npx nx test [is-even] runs the pre-configured Jest tests for the package
- npx nx test open-ai-helpers

### Build
- npx nx build open-ai-helpers
- npx nx build [is-odd]
- npx nx run-many --target=build
- npx nx affected --target=build **RUN NO CACHE**

### Lint

- nx run [is-even]:lint

---

## Learn More

- [DOC README] (https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#quoting-text) - Learn about README SYSTAX
- [DOC NX] (https://nx.dev/) - Learn about nx tool
- [DOC NPM] (https://docs.npmjs.com/) - Learn about npm

## Example & Doc

### es5
```javascript
  const { findLast } = require('@phutran98/open-ai-helpers')

  const input = [1, 2, 3, 4, 5];
  const fn = (elem) => elem > 2;

  console.log('FindLast: ',findLast(input,fn)) // 3
```

### es6

```javascript
  import { findLast } from '@phutran98/open-ai-helpers'

  const input = [1, 2, 3, 4, 5];
  const fn = (elem) => elem > 2;

  console.log('FindLast: ',findLast(input,fn)) // 3
```
### 1.Words
```javascript
  import { words } from '@phutran98/open-ai-helpers'
  const input = 'Hello world!'

  console.log('Words: ', words(input)) // ['Hello', 'world'];
```
### 2.All
```javascript
  import { all } from '@phutran98/open-ai-helpers'
  const input = [4, 2, 3];

  console.log('All: ', all(input, x => x > 1)) // true
```
### 3.allEqual
```javascript
  import { allEqual } from '@phutran98/open-ai-helpers'
  const input = [4, 2, 3];
  const input2 = [1, 1, 1];

  console.log('allEqual: ',allEqual(input)) // false
  console.log('allEqual: ',allEqual(input2)) // true
```
### 4.approximatelyEqual
```javascript
  import { approximatelyEqual } from '@phutran98/open-ai-helpers'

  console.log('approximatelyEqual: ',approximatelyEqual(Math.PI / 2.0, 1.5708)) // true
  console.log('approximatelyEqual: ',approximatelyEqual(1, 2)) // false
```
### 5.arrayToCSV
```javascript
  import { arrayToCSV } from '@phutran98/open-ai-helpers'

  console.log('arrayToCSV: ',arrayToCSV([['a', 'b'], ['c', 'd']])) // '"a","b"\n"c","d"'
  console.log('arrayToCSVWords: ',arrayToCSV([['a', 'b'], ['c', 'd']], ';')) // '"a";"b"\n"c";"d"'
```
### 6.arrayToHtmlList
```javascript
  import { arrayToHtmlList } from '@phutran98/open-ai-helpers'

  console.log('arrayToHtmlList: ',arrayToHtmlList(['item 1', 'item 2'])) // '<ul><li>item 1</li><li>item 2</li></ul>'
```
### 7.average
```javascript
  import { average } from '@phutran98/open-ai-helpers'

  const input = [1, 2, 3, 4, 5];

  console.log('average: ',average(input)) // 3
```
### 8.missingNumber
```javascript
  import { missingNumber } from '@phutran98/open-ai-helpers'

  const input = [1, 2, 4, 5];

  console.log('missingNumber: ',missingNumber(input)) // 3
```
### 9.averageBy
```javascript
  import { averageBy } from '@phutran98/open-ai-helpers'

  const input = [1, 2, 3, 4];

  console.log('averageBy: ',averageBy(input, val => val)) // 2.5
```
### 10.onesAndZeros
```javascript
  import { onesAndZeros } from '@phutran98/open-ai-helpers'

  const input = '101';

  console.log('result: ', onesAndZeros(input, '1', '0')) // 1
```
### 11 validateNumber
```javascript
  import { validateNumber } from '@phutran98/open-ai-helpers'

  const input1 = 1;
  const input2 = '3.14';
  const input3 = 'abc';

  console.log('result: ', validateNumber(input1)) // true
  console.log('result: ', validateNumber(input2)) // true
  console.log('result: ', validateNumber(input3)) // false
```
### 12.toCurrency
```javascript
  import { toCurrency } from '@phutran98/open-ai-helpers'

  console.log('result: ', toCurrency(1000.5, "USD")) // $1,000.50
  console.log('result: ', toCurrency(-1000.5, "USD")) // -$1,000.50
  console.log('result: ', toCurrency(0, "USD")) // $0.00
```
### 13.takeRight
```javascript
  import { takeRight } from '@phutran98/open-ai-helpers'

  console.log('result: ', takeRight([1, 2, 3, 4, 5], 3)) // [3, 4, 5]
  console.log('result: ', takeRight(["a", "b", "c", "d"], 2)) // ["c", "d"]
  console.log('result: ', takeRight([{ name: "John" }, { name: "Jane" }, { name: "Bob" }])) // [{ name: "Bob" }]
  console.log('result: ', takeRight([1, 2, 3], 0)) // []
  console.log('result: ', takeRight([{ name: "John" }], 2)) // [{ name: "John" }]
```
### 14.take
```javascript
  import { take } from '@phutran98/open-ai-helpers'

  console.log('result: ', take([1, 2, 3], 2)) // [1 , 2]
  console.log('result: ', take(["a", "b", "c", "d"], 3)), // ["a", "b", "c", "d"]
  console.log('result: ', take(["a", "b", "c", "d"])), // ["a"]
  console.log('result: ', take([true, false, true])), // [true]
```
### 15.matches
```javascript
  import { matches } from '@phutran98/open-ai-helpers'

  console.log('result: ', matches([1, 2, 3], 2)) // [1 , 2]
  console.log('result: ', matches(["a", "b", "c", "d"], 3)), // ["a", "b", "c", "d"]
  console.log('result: ', matches(["a", "b", "c", "d"])), // ["a"]
  console.log('result: ', matches([true, false, true])), // [true]
```
### 16.isValidJSON
```javascript
  import { isValidJSON } from '@phutran98/open-ai-helpers'

  console.log('result: ', isValidJSON('{"name":"John","age":30,"city":"New York"}')) // true
  console.log('result: ', isValidJSON('{"name":"John","age":30,"city":"New York"')) // false
```
### 17.isSameDate
```javascript
  import { isSameDate } from '@phutran98/open-ai-helpers'

  const date1 = new Date(2022, 0, 1);
  const date2 = new Date(2022, 0, 1);

  console.log('result: ', isSameDate(date1, date2)) // true
```
### 18.isValidDate
```javascript
  import { isValidDate } from '@phutran98/open-ai-helpers'

  const validDate = new Date("2022-01-01");
  const validDate2 = undefined;

  console.log('result: ', isValidDate(validDate)) // true
  console.log('result: ', isValidDate(validDate2)) // false
```
### 19.indexOfAll
```javascript
  import { indexOfAll } from '@phutran98/open-ai-helpers'

  console.log('result: ', indexOfAll([1, 2, 3, 4, 1], 1)) // [0, 4]
  console.log('result: ', indexOfAll(["a", "b", "a", "c", "d", "a"], "a")) // [0, 2, 5]
  console.log('result: ', indexOfAll([true, false, true, false, true], true)) // [0, 2, 4]
```
### 20.groupBy
```javascript
  import { groupBy } from '@phutran98/open-ai-helpers'
  const arr = [6.1, 4.2, 6.3];

  console.log('result: ', groupBy(arr, Math.floor)) // { '4': [4.2], '6': [6.1, 6.3] }
```
### 21.filterNonUnique
```javascript
  import { filterNonUnique } from '@phutran98/open-ai-helpers'
  const input = [1, 2, 2, 'hello', 'world', 'hello'];

  console.log('result: ', filterNonUnique(input)) // [1, 'world']
```
### 22.dropRightWhile
```javascript
  import { dropRightWhile } from '@phutran98/open-ai-helpers'
  const arr = [1, 2, 3, 4];
  const func = (n: number) => n < 5;
  const func2 = (n: number) => n > 5;

  console.log('result: ', dropRightWhile(arr,func)) // [1, 2, 3, 4]
  console.log('result: ', dropRightWhile(arr,func2)) // []
```
### 23.dropRight
```javascript
  import { dropRight } from '@phutran98/open-ai-helpers'
  const arr = [1, 2, 3, 4];

  console.log('result: ', dropRight(arr)) // [1, 2, 3]
  console.log('result: ', dropRight(arr,2)) // [1, 2]
```
### 24.dropRight
```javascript
  import { dropRight } from '@phutran98/open-ai-helpers'
  const arr = [1, 2, 3, 4];

  console.log('result: ', dropRight(arr)) // [1, 2, 3]
  console.log('result: ', dropRight(arr,2)) // [1, 2]
```
### 25.drop
```javascript
  import { drop } from '@phutran98/open-ai-helpers'
  const arr = [1, 2, 3, 4];

  console.log('result: ', drop(arr)) // [1, 2, 3]
  console.log('result: ', drop(arr,2)) // [3, 4]
```
### 26.deepFlatten
```javascript
  import { deepFlatten } from '@phutran98/open-ai-helpers'
  const arr = [1, 2, [3, [4, 5]], 6];

  console.log('result: ', deepFlatten(arr)) // [1, 2, 3, 4, 5, 6]
```
### 27.countOccurrences
```javascript
  import { countOccurrences } from '@phutran98/open-ai-helpers'
  const arr = [1, 2, 3, 2, 2, 4, 2, 5];
  const val = 2;
  const result = countOccurrences(arr, val); // 4
```
### 28.compact
```javascript
  import { compact } from '@phutran98/open-ai-helpers'
  const input = [0, 1, false, true, '', 'hello', null, undefined, NaN];
  const result = compact(arr, val); // [1, true, 'hello'];
```
### 29.checkFalsy
```javascript
  import { checkFalsy } from '@phutran98/open-ai-helpers'
  const result = checkFalsy(0); // true
  const result = checkFalsy(''); // true
  const result = checkFalsy(1); // false
  const result = checkFalsy('abc'); // false
```
### 30.capitalizeEveryWord
```javascript
  import { capitalizeEveryWord } from '@phutran98/open-ai-helpers'
  const input = 'hello world';
  const result = capitalizeEveryWord(input); // 'Hello World';

  const input2 = 'hello';
  const result2 = capitalizeEveryWord(input2); // Hello
```
### 31.camelCase
```javascript
  import { camelCase } from '@phutran98/open-ai-helpers'
  const input = 'foo bar';
  const result = camelCase(input); // fooBar

  const input2 = '--foo-bar--';
  const result2 = camelCase(input2); // FooBar
```
### 32.baseToString
```javascript
  import { camelCase } from '@phutran98/open-ai-helpers'
  const input = 'foo bar';
  const result = camelCase(input); // fooBar

  const input2 = '--foo-bar--';
  const result2 = camelCase(input2); // FooBar
```