const sanitizeHTML = require('../copy-pasta/client/koenig-sanitize-html');

module.exports = function (html) {
    // TODO: make this magic happen!

    // Vague steps:
    // 1. sanitize HTML
    let sanitizedHTML = sanitizeHTML(html);

    // 2. ??

    // 3. Profit.

    let mobiledoc = sanitizedHTML;

    return mobiledoc;
};
