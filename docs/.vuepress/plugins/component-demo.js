const markdownItContainer = require('markdown-it-container');

module.exports = () => {
  return {
    name: 'component-demo',
    extendsMarkdown: (md) => {
      md.use(markdownItContainer, 'demo', { render });
    },
  };

  function render(tokens, idx, { highlight }) {
    const END_TYPE = 'container_demo_close';
    const { nesting } = tokens[idx];
    if (nesting === -1) {
      return '</ComponentDemo>\n';
    }

    let rawHtmlStr = '';

    for (let index = idx; index < tokens.length; index++) {
      const { type, content } = tokens[index];
      if (type === END_TYPE) break;
      rawHtmlStr += content;
    }

    const content = encodeURIComponent(highlight(rawHtmlStr, 'vue'));
    return `<ComponentDemo content="${content}">`;
  }
};
