const glob = require('glob');
const { defaultTheme } = require('@vuepress/theme-default');

module.exports = {
  title: 'Swimm UI',
  description: `Swimm's Design System`,
  plugins: [
    [
      'demo-code',
      {
        onlineBtns: {
          codepen: false,
          jsfiddle: false,
          codesandbox: false,
        },
      },
    ],
  ],
  theme: defaultTheme({
    sidebar: [
      {
        text: 'Foundations',
        collapsable: false,
        children: getGroup('/foundations'),
      },
      {
        text: 'Components',
        collapsable: false,
        children: getGroup('/components'),
      },
    ],
    repo: 'swimmio/swimm-ui',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
  }),
};

function getGroup(path) {
  return glob
    .sync('docs/**/*.md')
    .filter((file) => file.startsWith(`docs${path}`))
    .map((file) => file.replace(`docs`, ''))
    .map((file) => file.replace('.md', ''));
}
