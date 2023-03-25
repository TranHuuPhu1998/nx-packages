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
