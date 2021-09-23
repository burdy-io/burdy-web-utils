# Burdy Web Utils

Powerful utilities to simplify usage of the [Burdy](https://burdy.io) on the web.

- See [Burdy Docs](https://burdy.io/docs) for more details

## Instalation

```sh
npm i burdy-web-utils
```

## Functionalities
### richtextToHtml

A function for converting Richtext (DraftJS) Editor content to plain HTML.

This is forked version of `draftjs-to-html` [draftjs-to-html](https://www.npmjs.com/package/draftjs-to-html) created by [Jyoti Puri](https://github.com/jpuri).

#### Usage
```
import { richtextToHtml } from 'burdy-web-utils';

const rawContentState = BURDY_RICHTEXT_RESPONSE;

const markup = richtextToHtml(
  rawContentState
);
```