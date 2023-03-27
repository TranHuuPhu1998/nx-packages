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

### Update is-even.ts with this content

```packages/is-even/src/lib/is-even.ts

export function isEven(x: number): boolean {
  return x % 2 === 0;
}
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

```
  const { HelpersFindLast } = require('@phutran98/open-ai-helpers')

  const input = [1, 2, 3, 4, 5];
  const fn = (elem) => elem > 2;

  console.log('HelpersFindLast: ',HelpersFindLast(input,fn))
```
or

```
  import { HelpersFindLast } from '@phutran98/open-ai-helpers'

  const input = [1, 2, 3, 4, 5];
  const fn = (elem) => elem > 2;

  console.log('HelpersFindLast: ',HelpersFindLast(input,fn))
```

```
  import { HelpersWords } from '@phutran98/open-ai-helpers'
  const input = 'Hello world!'

  console.log('HelpersWords: ',HelpersFindLast(input)) // ['Hello', 'world'];
```

```
  import { HelpersAll } from '@phutran98/open-ai-helpers'
  const input = [4, 2, 3];

  console.log('HelpersAll: ',HelpersAll(input, x => x > 1)) // true
```

```
  import { HelpersAllEqual } from '@phutran98/open-ai-helpers'
  const input = [4, 2, 3];
  const input2 = [1, 1, 1];

  console.log('HelpersAllEqual: ',HelpersAllEqual(input)) // false
  console.log('HelpersAllEqual: ',HelpersAllEqual(input2)) // true
```

```
  import { HelpersApproximatelyEqual } from '@phutran98/open-ai-helpers'

  console.log('HelpersApproximatelyEqual: ',HelpersApproximatelyEqual(Math.PI / 2.0, 1.5708)) // true
  console.log('HelpersApproximatelyEqual: ',HelpersApproximatelyEqual(1, 2)) // false
```

```
  import { HelpersArrayToCSV } from '@phutran98/open-ai-helpers'

  console.log('HelpersArrayToCSV: ',HelpersArrayToCSV([['a', 'b'], ['c', 'd']])) // '"a","b"\n"c","d"'
  console.log('HelpersHelpersArrayToCSVWords: ',HelpersArrayToCSV([['a', 'b'], ['c', 'd']], ';')) // '"a";"b"\n"c";"d"'
```

```
  import { HelpersArrayToHtmlList } from '@phutran98/open-ai-helpers'

  console.log('HelpersArrayToHtmlList: ',HelpersArrayToHtmlList(['item 1', 'item 2'])) // '<ul><li>item 1</li><li>item 2</li></ul>'
```

```
  import { HelpersAverage } from '@phutran98/open-ai-helpers'

  const input = [1, 2, 3, 4, 5];

  console.log('HelpersAverage: ',HelpersAverage(input)) // 3
```