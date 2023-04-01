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
  const { HelpersFindLast } = require('@phutran98/open-ai-helpers')

  const input = [1, 2, 3, 4, 5];
  const fn = (elem) => elem > 2;

  console.log('HelpersFindLast: ',HelpersFindLast(input,fn)) // 3
```

### es6

```javascript
  import { HelpersFindLast } from '@phutran98/open-ai-helpers'

  const input = [1, 2, 3, 4, 5];
  const fn = (elem) => elem > 2;

  console.log('HelpersFindLast: ',HelpersFindLast(input,fn)) // 3
```
### 1.HelpersWords
```javascript
  import { HelpersWords } from '@phutran98/open-ai-helpers'
  const input = 'Hello world!'

  console.log('HelpersWords: ',HelpersFindLast(input)) // ['Hello', 'world'];
```
### 2.HelpersAll
```javascript
  import { HelpersAll } from '@phutran98/open-ai-helpers'
  const input = [4, 2, 3];

  console.log('HelpersAll: ',HelpersAll(input, x => x > 1)) // true
```
### 3.HelpersAllEqual
```javascript
  import { HelpersAllEqual } from '@phutran98/open-ai-helpers'
  const input = [4, 2, 3];
  const input2 = [1, 1, 1];

  console.log('HelpersAllEqual: ',HelpersAllEqual(input)) // false
  console.log('HelpersAllEqual: ',HelpersAllEqual(input2)) // true
```
### 4.HelpersApproximatelyEqual
```javascript
  import { HelpersApproximatelyEqual } from '@phutran98/open-ai-helpers'

  console.log('HelpersApproximatelyEqual: ',HelpersApproximatelyEqual(Math.PI / 2.0, 1.5708)) // true
  console.log('HelpersApproximatelyEqual: ',HelpersApproximatelyEqual(1, 2)) // false
```
### 5.HelpersArrayToCSV
```javascript
  import { HelpersArrayToCSV } from '@phutran98/open-ai-helpers'

  console.log('HelpersArrayToCSV: ',HelpersArrayToCSV([['a', 'b'], ['c', 'd']])) // '"a","b"\n"c","d"'
  console.log('HelpersHelpersArrayToCSVWords: ',HelpersArrayToCSV([['a', 'b'], ['c', 'd']], ';')) // '"a";"b"\n"c";"d"'
```
### 6.HelpersArrayToHtmlList
```javascript
  import { HelpersArrayToHtmlList } from '@phutran98/open-ai-helpers'

  console.log('HelpersArrayToHtmlList: ',HelpersArrayToHtmlList(['item 1', 'item 2'])) // '<ul><li>item 1</li><li>item 2</li></ul>'
```
### 7.HelpersAverage
```javascript
  import { HelpersAverage } from '@phutran98/open-ai-helpers'

  const input = [1, 2, 3, 4, 5];

  console.log('HelpersAverage: ',HelpersAverage(input)) // 3
```
### 8.HelperMissingNumber
```javascript
  import { HelperMissingNumber } from '@phutran98/open-ai-helpers'

  const input = [1, 2, 4, 5];

  console.log('HelperMissingNumber: ',HelperMissingNumber(input)) // 3
```
### 9.HelpersAverageBy
```javascript
  import { HelpersAverageBy } from '@phutran98/open-ai-helpers'

  const input = [1, 2, 3, 4];

  console.log('HelpersAverageBy: ',HelpersAverageBy(input, val => val)) // 2.5
```
### 10.HelpersOnesAndZeros
```javascript
  import { HelpersOnesAndZeros } from '@phutran98/open-ai-helpers'

  const input = '101';

  console.log('result: ',HelpersAverageBy(input, '1', '0')) // 1
```
### 11.HelpersWords
```javascript
  import { HelperValidateNumber } from '@phutran98/open-ai-helpers'

  const input1 = 1;
  const input2 = '3.14';
  const input3 = 'abc';

  console.log('result: ', HelperValidateNumber(input1)) // true
  console.log('result: ', HelperValidateNumber(input2)) // true
  console.log('result: ', HelperValidateNumber(input3)) // false
```
### 12.HelpersToCurrency
```javascript
  import { HelpersToCurrency } from '@phutran98/open-ai-helpers'

  console.log('result: ', HelpersToCurrency(1000.5, "USD")) // $1,000.50
  console.log('result: ', HelpersToCurrency(-1000.5, "USD")) // -$1,000.50
  console.log('result: ', HelpersToCurrency(0, "USD")) // $0.00
```
### 13.HelperTakeRight
```javascript
  import { HelperTakeRight } from '@phutran98/open-ai-helpers'

  console.log('result: ', HelperTakeRight([1, 2, 3, 4, 5], 3)) // [3, 4, 5]
  console.log('result: ', HelperTakeRight(["a", "b", "c", "d"], 2)) // ["c", "d"]
  console.log('result: ', HelperTakeRight([{ name: "John" }, { name: "Jane" }, { name: "Bob" }])) // [{ name: "Bob" }]
  console.log('result: ', HelperTakeRight([1, 2, 3], 0)) // []
  console.log('result: ', HelperTakeRight([{ name: "John" }], 2)) // [{ name: "John" }]
```
### 14.HelperTake
```javascript
  import { HelperTake } from '@phutran98/open-ai-helpers'

  console.log('result: ', HelperTake([1, 2, 3], 2)) // [1 , 2]
  console.log('result: ', HelperTake(["a", "b", "c", "d"], 3)), // ["a", "b", "c", "d"]
  console.log('result: ', HelperTake(["a", "b", "c", "d"])), // ["a"]
  console.log('result: ', HelperTake([true, false, true])), // [true]
```
### 15.HelpersMatches
```javascript
  import { HelpersMatches } from '@phutran98/open-ai-helpers'

  console.log('result: ', HelpersMatches([1, 2, 3], 2)) // [1 , 2]
  console.log('result: ', HelpersMatches(["a", "b", "c", "d"], 3)), // ["a", "b", "c", "d"]
  console.log('result: ', HelpersMatches(["a", "b", "c", "d"])), // ["a"]
  console.log('result: ', HelpersMatches([true, false, true])), // [true]
```
### 16.HelpersIsValidJSON
```javascript
  import { HelpersIsValidJSON } from '@phutran98/open-ai-helpers'

  console.log('result: ', HelpersIsValidJSON('{"name":"John","age":30,"city":"New York"}')) // true
  console.log('result: ', HelpersIsValidJSON('{"name":"John","age":30,"city":"New York"')) // false
```
### 17.HelpersIsSameDate
```javascript
  import { HelpersIsSameDate } from '@phutran98/open-ai-helpers'

  const date1 = new Date(2022, 0, 1);
  const date2 = new Date(2022, 0, 1);

  console.log('result: ', HelpersIsSameDate(date1, date2)) // true
```
### 18.HelpersIsSameDate
```javascript
  import { HelpersIsSameDate } from '@phutran98/open-ai-helpers'

  const date1 = new Date(2022, 0, 1);
  const date2 = new Date(2022, 0, 1);

  console.log('result: ', HelpersIsSameDate(date1, date2)) // true
```
### 18.HelpersIsSameDate
```javascript
  import { HelpersIsSameDate } from '@phutran98/open-ai-helpers'

  const date1 = new Date(2022, 0, 1);
  const date2 = new Date(2022, 0, 1);

  console.log('result: ', HelpersIsSameDate(date1, date2)) // true
```
### 19.HelpersIndexOfAll
```javascript
  import { HelpersIndexOfAll } from '@phutran98/open-ai-helpers'

  console.log('result: ', HelpersIndexOfAll([1, 2, 3, 4, 1], 1)) // [0, 4]
  console.log('result: ', HelpersIndexOfAll(["a", "b", "a", "c", "d", "a"], "a")) // [0, 2, 5]
  console.log('result: ', HelpersIndexOfAll([true, false, true, false, true], true)) // [0, 2, 4]
```
### 20.HelpersGroupBy
```javascript
  import { HelpersGroupBy } from '@phutran98/open-ai-helpers'
  const arr = [6.1, 4.2, 6.3];

  console.log('result: ', HelpersGroupBy(arr, Math.floor)) // { '4': [4.2], '6': [6.1, 6.3] }
```
### 21.HelpersFilterNonUnique
```javascript
  import { HelpersFilterNonUnique } from '@phutran98/open-ai-helpers'
  const input = [1, 2, 2, 'hello', 'world', 'hello'];

  console.log('result: ', HelpersFilterNonUnique(input)) // [1, 'world']
```
### 22.HelpersDropRightWhile
```javascript
  import { HelpersDropRightWhile } from '@phutran98/open-ai-helpers'
  const arr = [1, 2, 3, 4];
  const func = (n: number) => n < 5;
  const func2 = (n: number) => n > 5;

  console.log('result: ', HelpersDropRightWhile(arr,func)) // [1, 2, 3, 4]
  console.log('result: ', HelpersDropRightWhile(arr,func2)) // []
```
### 23.HelpersDropRight
```javascript
  import { HelpersDropRight } from '@phutran98/open-ai-helpers'
  const arr = [1, 2, 3, 4];

  console.log('result: ', HelpersDropRight(arr)) // [1, 2, 3]
  console.log('result: ', HelpersDropRight(arr,2)) // [1, 2]
```
### 24.HelpersDropRight
```javascript
  import { HelpersDropRight } from '@phutran98/open-ai-helpers'
  const arr = [1, 2, 3, 4];

  console.log('result: ', HelpersDropRight(arr)) // [1, 2, 3]
  console.log('result: ', HelpersDropRight(arr,2)) // [1, 2]
```
### 25.HelpersDrop
```javascript
  import { HelpersDrop } from '@phutran98/open-ai-helpers'
  const arr = [1, 2, 3, 4];

  console.log('result: ', HelpersDrop(arr)) // [1, 2, 3]
  console.log('result: ', HelpersDrop(arr,2)) // [3, 4]
```
### 26.HelpersDeepFlatten
```javascript
  import { HelpersDeepFlatten } from '@phutran98/open-ai-helpers'
  const arr = [1, 2, [3, [4, 5]], 6];

  console.log('result: ', HelpersDeepFlatten(arr)) // [1, 2, 3, 4, 5, 6]
```
### 27.HelpersCountOccurrences
```javascript
  import { HelpersCountOccurrences } from '@phutran98/open-ai-helpers'
  const arr = [1, 2, 3, 2, 2, 4, 2, 5];
  const val = 2;
  const result = HelpersCountOccurrences(arr, val); // 4
```
### 28.HelpersCompact
```javascript
  import { HelpersCompact } from '@phutran98/open-ai-helpers'
  const input = [0, 1, false, true, '', 'hello', null, undefined, NaN];
  const result = HelpersCountOccurrences(arr, val); // [1, true, 'hello'];
```
### 29.HelpersCheckFalsy
```javascript
  import { HelpersCheckFalsy } from '@phutran98/open-ai-helpers'
  const result = HelpersCheckFalsy(0); // true
  const result = HelpersCheckFalsy(''); // true
  const result = HelpersCheckFalsy(1); // false
  const result = HelpersCheckFalsy('abc'); // false
```
### 30.HelpersCapitalizeEveryWord
```javascript
  import { HelpersCapitalizeEveryWord } from '@phutran98/open-ai-helpers'
  const input = 'hello world';
  const result = HelpersCapitalizeEveryWord(input); // 'Hello World';

  const input2 = 'hello';
  const result2 = HelpersCapitalizeEveryWord(input2); // Hello
```
### 31.HelpersCamelCase
```javascript
  import { HelpersCamelCase } from '@phutran98/open-ai-helpers'
  const input = 'foo bar';
  const result = HelpersCamelCase(input); // fooBar

  const input2 = '--foo-bar--';
  const result2 = HelpersCamelCase(input2); // FooBar
```
### 32.HelpersBaseToString
```javascript
  import { HelpersCamelCase } from '@phutran98/open-ai-helpers'
  const input = 'foo bar';
  const result = HelpersCamelCase(input); // fooBar

  const input2 = '--foo-bar--';
  const result2 = HelpersCamelCase(input2); // FooBar
```