const sanitizeHTML = require('../copy-pasta/client/koenig-sanitize-html');

const Builder = require('@tryghost/mobiledoc-kit').Builder;
const DOMParser = require('@tryghost/mobiledoc-kit').DOMParser;
const JSDOM = require('jsdom');
const { JSDOM } = jsdom;
const mobiledocRenderer = require('@tryghost/mobiledoc-kit').mobiledocRenderer;

const convertor = (html) => {
    // TODO: make this magic happen!

    // Vague steps:
    // 1. sanitize HTML
    let sanitizedHTML = sanitizeHTML(html);

    // 2. Do something vaguely like loadPost
    // https://github.com/ErisDS/mobiledoc-kit/blob/master/src/js/editor/editor.js#L193
    let builder = new Builder();
    let parser = new DOMParser(builder);
    let dom = new JSDOM(sanitizedHTML);
    let post = parser.parse(dom.window.document);

    // 3. Do something vaguely like serializePost
    // https://github.com/ErisDS/mobiledoc-kit/blob/master/src/js/editor/editor.js#L567
    let mobiledoc = mobiledocRenderer.render(post, '0.3.1');

    return mobiledoc;
};

module.exports = convertor;
