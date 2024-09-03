# extend-arabic-query

This package provides a set of functions that helps you compare Arabic strings without having to worry about the phonetic differences between the letters.

```js
import { compare } from 'extend-arabic-query';

compare('أحمد زكي', 'احمد ذكى'); // returns `true`
```

## Usage

The usage is as simple as `compare(string1, string2[, ...strings])`. This will only return `true` if all strings are phonetically equivalent.
You also have 2 more functions to use: `getRegexString(string)` and `regexify(string[, flags])`;

- `getRegexString(string)` returns a string with all the substitutions that will be performed on the input string. This string essentially forms the RegEx that will be used for the comparison. You can use it in initializing a RegEx object, or just use it to see what the function will do.
- `regexify(string[, flags])` returns a RegEx object that is ready for `.test()` and `.match()` calls. Optionally, you can pass a string of RegEx flags to the second argument.

As mentioned before, the function uses regular expressions (RegEx), so you can also make use of that by inserting any regex syntax into the query, like capture groups (`()`), search lists (`[]`), lookaheads (`(?=)`), and other syntax.

**Note** that, the function skips any text enclosed between `(`parenthesis`)` or `[`square parenthesis`]`. That's how RegEx works, to avoid substituting the performed substitutions, which might eventually cause an infinite loop.

**Also, note** that it works by default on single line strings. So, for example, if you are matching against a multiline string, simply add the `'m'` flag to the second argument in the `RegExp()` class, or to the `regexify()` function.

## Installation

Simply install the package into your project `node_modules/` via your package manager:

```bash
npm install extend-arabic-query
```

```bash
yarn extend-arabic-query
```

```bash
pnpm add extend-arabic-query
```

Then, import the function to your module or javascript file:

```js
import { compare, regexify, getRegexString } from 'extend-arabic-query';
```

and you're good to go.
