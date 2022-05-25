const glob = require('glob');
const markdownItContainer = require('markdown-it-container');
const path = require('path');

module.exports = {
  title: 'Swimm UI',
  base: '/swimm-ui/',
  description: `Swimm's Design System`,
  themeConfig: {
    sidebar: [
      {
        title: 'Foundations',
        collapsable: false,
        children: getGroup('/foundations'),
      },
      {
        title: 'Components',
        collapsable: false,
        children: getGroup('/components'),
      },
    ],
    repo: 'swimmio/swimm-ui',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
  },
  alias: {
    '@swimm/ui': path.resolve(__dirname, '../../src/'),
  },
  markdown: {
    extendMarkdown: (md) => {
      md.use(markdownItContainer, 'demo', { render: renderComponentDemo });
    },
  },
};

function getGroup(path) {
  return glob
    .sync('docs/**/*.md')
    .filter((file) => {
      return file.startsWith(`docs${path}`);
    })
    .map((f) => f.replace(`docs`, ''))
    .map((f) => f.replace('.md', ''));
}

function renderComponentDemo(tokens, idx, { highlight }) {
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
