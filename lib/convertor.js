import sanitizeHTML from '../copy-pasta/client/koenig-sanitize-html';
import parserPlugins from '../copy-pasta/client/koenig-parser-plugins';

// For some reason import doesn't work here?
const DOMParser = require('@tryghost/mobiledoc-kit/dist/commonjs/mobiledoc-kit/parsers/dom').default;
const Builder = require('@tryghost/mobiledoc-kit/dist/commonjs/mobiledoc-kit/models/post-node-builder').default;
const mobiledocRenderer = require('@tryghost/mobiledoc-kit/dist/commonjs/mobiledoc-kit/renderers/mobiledoc').default;

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const convertor = (html) => {
    // Vague steps:
    // 1. sanitize HTML
    let sanitizedHTML = sanitizeHTML(html);
    //
    // 2. Do something vaguely like loadPost
    // https://github.com/ErisDS/mobiledoc-kit/blob/master/src/js/editor/editor.js#L193
    let builder = new Builder();
    let parser = new DOMParser(builder, {plugins: parserPlugins});
    let dom = new JSDOM(sanitizedHTML);
    // console.log('DOM children', dom.window.document.body.children);
    let post = parser.parse(dom.window.document.body);

    // console.log(post.walkAllLeafSections(function cb() {
    //     console.log(arguments);
    // }));

    // 3. Do something vaguely like serializePost
    // https://github.com/ErisDS/mobiledoc-kit/blob/master/src/js/editor/editor.js#L567
    let mobiledoc = mobiledocRenderer.render(post, '0.3.1');

    return mobiledoc;
};

export default convertor;
