/**
 * Copied from Ghost/core/client/lib/koenig-editor/addon/helpers/clean-basic-html.js
 *
 * cleanBasicHtml - L4-36
 *
 * This function is used to sanitize HTML before paste
 * It _should_ also be used to sanitze HTML before initialising the editor with HTML
 */

const createDomParser = (html) => {
    return new DOMParser().parseFromString(html, 'text/html');
}

module.exports = (html = '') => {
    if (Array.isArray(html)) {
        html = html[0] || '';
    }

    let cleanHtml = html
        .replace(/<br>/g, ' ')
        .replace(/(\s|&nbsp;){2,}/g, ' ')
        .trim()
        .replace(/^&nbsp;|&nbsp$/g, '')
        .trim();

    // remove any elements that have a blank textContent
    if (cleanHtml) {
        let doc = createDomParser(cleanHtml);

        doc.body.querySelectorAll('*').forEach((element) => {
            if (!element.textContent.trim()) {
                if (element.textContent.length > 0) {
                    // keep a single space to avoid collapsing spaces
                    let space = doc.createTextNode(' ');
                    element.replaceWith(space);
                } else {
                    element.remove();
                }
            }
        });

        cleanHtml = doc.body.innerHTML;
    }

    return cleanHtml;
}
