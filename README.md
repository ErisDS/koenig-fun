# Koenig Fun

To make this weird-ass thing work:

1. Clone this repo as usual
2. `cd` into the dir and `yarn`
3. Also clone my fork of TryGhost's fork of mobiledoc kit: https://github.com/ErisDS/mobiledoc-kit
4. `cd` into the dir and `yarn`
5. `yarn link`
6. Go back to folder with the clone of koenig-fun and `yarn link "@tryghost/mobiledoc-kit"`
7. `yarn dev`

You _should_ see some mobiledoc output. It appears to be correct except its missing our cards.

My fork of mobiledoc kit does nothing except expose all the relevant stuff.

Questions:

1. Is there a way to link into the internals of mobiledoc-kit without exposing them, like our ember thing does?

According to MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Syntax

This is a valid thing:
`import { foo , bar } from "module-name/path/to/specific/un-exported/file";`

But I couldn't figure out how to make babel do transpiliation, hence the quick n dirty fork.

2. How do we get our parser plugins involved? There are a couple of problems:

a. parser plugins only seem to be used by the htmlparser:
https://github.com/ErisDS/mobiledoc-kit/blob/master/src/js/editor/editor.js#L200
b. the html parser relies on 'document' which we don't have in node:
https://github.com/ErisDS/mobiledoc-kit/blob/master/src/js/utils/dom-utils.js#L94



## Run
- Use: `yarn dev`

# Copyright & License

Copyright (c) 2018 Ghost Foundation - Released under the [MIT license](LICENSE).
