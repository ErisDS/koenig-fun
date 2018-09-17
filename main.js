/* eslint-disable */

// The MobileDoc for our "publishing options" post
const originalMobiledoc = "{\"version\":\"0.3.1\",\"atoms\":[],\"cards\":[[\"image\",{\"src\":\"https://casper.ghost.org/v2.0.0/images/formatting-editor-demo.gif\"}],[\"code\",{\"code\":\"<header class=\\\"site-header outer\\\">\\n    <div class=\\\"inner\\\">\\n        {{> \\\"site-nav\\\"}}\\n    </div>\\n</header>\"}],[\"image\",{\"src\":\"https://casper.ghost.org/v2.0.0/images/using-images-demo.gif\"}]],\"markups\":[[\"strong\"],[\"code\"],[\"a\",[\"href\",\"/publishing-options/\"]]],\"sections\":[[1,\"p\",[[0,[],0,\"Ghost has a powerful visual editor with familiar formatting options, as well as the ability to seamlessly add dynamic content. \"]]],[1,\"p\",[[0,[],0,\"Select the text to add formatting, headers or create links, or use Markdown shortcuts to do the work for you - if that's your thing. \"]]],[10,0],[1,\"h2\",[[0,[],0,\"Rich editing at your fingertips\"]]],[1,\"p\",[[0,[],0,\"The editor can also handle rich media objects, called \"],[0,[0],1,\"cards\"],[0,[],0,\". \"]]],[1,\"p\",[[0,[],0,\"You can insert a card either by clicking the  \"],[0,[1],1,\"+\"],[0,[],0,\"  button on a new line, or typing  \"],[0,[1],1,\"/\"],[0,[],0,\"  on a new line to search for a particular card. This allows you to efficiently insert\"],[0,[0],1,\" images\"],[0,[],0,\", \"],[0,[0],1,\"markdown\"],[0,[],0,\", \"],[0,[0],1,\"html\"],[0,[],0,\" and \"],[0,[0],1,\"embeds\"],[0,[],0,\".\"]]],[1,\"p\",[[0,[0],1,\"For Example\"],[0,[],0,\":\"]]],[3,\"ul\",[[[0,[],0,\"Insert a video from YouTube directly into your content by pasting the URL \"]],[[0,[],0,\"Create unique content like a button or content opt-in using the HTML card\"]],[[0,[],0,\"Need to share some code? Embed code blocks directly \"]]]],[10,1],[1,\"h1\",[[0,[],0,\"Working with images in posts\"]]],[1,\"p\",[[0,[],0,\"You can add images to your posts in many ways:\"]]],[3,\"ul\",[[[0,[],0,\"Upload from your computer\"]],[[0,[],0,\"Click and drag an image into the browser\"]],[[0,[],0,\"Paste directly into the editor from your clipboard\"]],[[0,[],0,\"Insert using a URL\"]]]],[1,\"p\",[[0,[],0,\"Once inserted you can blend images beautifully into your content at different sizes and add captions wherever needed.\"]]],[10,2],[1,\"p\",[[0,[],0,\"The post settings menu and publishing options can be found in the top right hand corner. For more advanced tips on post settings check out the \"],[0,[2],1,\"publishing options\"],[0,[],0,\" post!\"]]],[1,\"p\",[]]]}";
// The resulting HTML
const renderedHTML = `<p>Ghost has a powerful visual editor with familiar formatting options, as well as the ability to seamlessly add dynamic content. </p><p>Select the text to add formatting, headers or create links, or use Markdown shortcuts to do the work for you - if that's your thing. </p><figure class="kg-card kg-image-card"><img src="https://casper.ghost.org/v2.0.0/images/formatting-editor-demo.gif" class="kg-image"></figure><h2 id="rich-editing-at-your-fingertips">Rich editing at your fingertips</h2><p>The editor can also handle rich media objects, called <strong>cards</strong>. </p><p>You can insert a card either by clicking the  <code>+</code>  button on a new line, or typing  <code>/</code>  on a new line to search for a particular card. This allows you to efficiently insert<strong> images</strong>, <strong>markdown</strong>, <strong>html</strong> and <strong>embeds</strong>.</p><p><strong>For Example</strong>:</p><ul><li>Insert a video from YouTube directly into your content by pasting the URL </li><li>Create unique content like a button or content opt-in using the HTML card</li><li>Need to share some code? Embed code blocks directly </li></ul><pre><code>&lt;header class="site-header outer"&gt;
    &lt;div class="inner"&gt;
        {{&gt; "site-nav"}}
    &lt;/div&gt;
&lt;/header&gt;</code></pre><h1 id="working-with-images-in-posts">Working with images in posts</h1><p>You can add images to your posts in many ways:</p><ul><li>Upload from your computer</li><li>Click and drag an image into the browser</li><li>Paste directly into the editor from your clipboard</li><li>Insert using a URL</li></ul><p>Once inserted you can blend images beautifully into your content at different sizes and add captions wherever needed.</p><figure class="kg-card kg-image-card"><img src="https://casper.ghost.org/v2.0.0/images/using-images-demo.gif" class="kg-image"></figure><p>The post settings menu and publishing options can be found in the top right hand corner. For more advanced tips on post settings check out the <a href="/publishing-options/">publishing options</a> post!</p>`;

// Resulting HTML with <strong>s converted back to <b>s.
const desanitizedHTML = `<p>Ghost has a powerful visual editor with familiar formatting options, as well as the ability to seamlessly add dynamic content. </p><p>Select the text to add formatting, headers or create links, or use Markdown shortcuts to do the work for you - if that's your thing. </p><figure class="kg-card kg-image-card"><img src="https://casper.ghost.org/v2.0.0/images/formatting-editor-demo.gif" class="kg-image"></figure><h2 id="rich-editing-at-your-fingertips">Rich editing at your fingertips</h2><p>The editor can also handle rich media objects, called <b>cards</b>. </p><p>You can insert a card either by clicking the  <code>+</code>  button on a new line, or typing  <code>/</code>  on a new line to search for a particular card. This allows you to efficiently insert<b> images</b>, <b>markdown</b>, <b>html</b> and <b>embeds</b>.</p><p><b>For Example</b>:</p><ul><li>Insert a video from YouTube directly into your content by pasting the URL </li><li>Create unique content like a button or content opt-in using the HTML card</li><li>Need to share some code? Embed code blocks directly </li></ul><pre><code>&lt;header class="site-header outer"&gt;
    &lt;div class="inner"&gt;
        {{&gt; "site-nav"}}
    &lt;/div&gt;
&lt;/header&gt;</code></pre><h1 id="working-with-images-in-posts">Working with images in posts</h1><p>You can add images to your posts in many ways:</p><ul><li>Upload from your computer</li><li>Click and drag an image into the browser</li><li>Paste directly into the editor from your clipboard</li><li>Insert using a URL</li></ul><p>Once inserted you can blend images beautifully into your content at different sizes and add captions wherever needed.</p><figure class="kg-card kg-image-card"><img src="https://casper.ghost.org/v2.0.0/images/using-images-demo.gif" class="kg-image"></figure><p>The post settings menu and publishing options can be found in the top right hand corner. For more advanced tips on post settings check out the <a href="/publishing-options/">publishing options</a> post!</p>`;


const htmltest = `<p>Ghost has a powerful visual editor with familiar formatting options, as well as the ability to seamlessly add dynamic content. </p><p>Select the text to add formatting, headers or create links, or use Markdown shortcuts to do the work for you - if that's your thing. </p>`;

import convertHTMLToMobileDoc from './lib/convertor';

console.time('Conversion took');
const mobiledoc = convertHTMLToMobileDoc(desanitizedHTML);
console.timeEnd('Conversion took');

const printMobiledoc = (title, md) => {
    console.log(title);
    console.log('version', md.version);
    console.log('atoms', md.atoms);
    console.log('cards', md.cards);
    console.log('markups', md.markups);
    console.log('sections', md.sections);
}

printMobiledoc('PROCESSED', mobiledoc);

console.log('\n\n');

// printMobiledoc('ORIGINAL', JSON.parse(originalMobiledoc));

console.log(JSON.stringify(mobiledoc));
