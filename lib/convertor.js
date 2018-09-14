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

    // 2. Setup some stuff from the Mobiledoc API
    let builder = new Builder();
    let parser = new DOMParser(builder);
    let dom = new JSDOM(sanitizedHTML);

    // 3. Profit.
    let post = parser.parse(dom.window.document);
    let mobiledoc = mobiledocRenderer.render(post, '0.3.1');

    return mobiledoc;
};

module.exports = convertor;
