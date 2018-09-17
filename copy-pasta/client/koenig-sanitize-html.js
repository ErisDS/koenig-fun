/**
 * Copied from Ghost/core/client/lib/koenig-editor/addon/components/koenig-editor.js
 *
 * handlePaste - L923
 *
 * This function is used to sanitize HTML before paste
 * It _should_ also be used to sanitze HTML before initialising the editor with HTML
 */

export default function (html) {
    let normalizedHtml = html
        .replace(/<b(\s|>)/gi, '<strong$1')
        .replace(/<\/b>/gi, '</strong>')
        .replace(/<i(\s|>)/gi, '<em$1')
        .replace(/<\/i>/gi, '</em>');

    return normalizedHtml;
};
