# vueschool-forum

> Vue School Forum

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Code Formatting
`Credit to https://markoskon.com/configuring-eslint-with-prettier/`

### ESLint plugin for VS Code
The plugin we need is called vscode-eslint and you can install it from the marketplace. You click the “extensions” icon on your left navigation bar inside VS Code and then you search for “eslint”. It should be the first result. You’ll need to reload the VS Code after you install in order to take effect. Now if you have lint errors in your code, you can see them highlighted inside the editor. Let’s now combine ESLint with Prettier by following the first and my personal favorite method.

### Format with Prettier then fix with ESlint.
The good news is that in order to use Prettier, we don’t necessarily need an additional dependency in our project. On the contrary, we’ll use another VS code plugin that’s called prettier-vscode. We can install it the same way, from the “Extensions” area inside VS Code. At this point, remember what we’re trying to achieve. We want to first run Prettier to format our code and the run ESLint with the –fix option to fix our linting errors. The prettier-vscode plugin does exactly that by using the prettier-eslint package under the hood. If we want those 2 plugins (vscode-eslint and prettier-vscode) to work nicely together, we’ll have to add some workspace options for VS Code in our project. We’ll do that by creating a folder named .vscode at the root of our project and inside that, we’ll add a settings.json file that looks like this:

``` json
.vscode/settings.json
{
  "prettier.eslintIntegration": true,
  "editor.formatOnSave": false
}

```

The first option instructs the Prettier plugin to read our .eslintrc configuration and format the code with respect to the linting rules. The second disables the formatting of our code on save which is my personal preference. We are now able to press Alt+Shift+F or right-click inside a file and then select the “Format Document” option and format our code! Objective completed. We configured ESLint and Prettier and we are ready to write some high-quality code.

To change the default formatter in Visal Studio Code, press Ctrl+Shift+P and change the default formatter to Prettier ESLint.