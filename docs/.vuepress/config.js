const glob = require('glob');
const { defaultTheme } = require('@vuepress/theme-default');
const { path } = require('@vuepress/utils');
const {
  registerComponentsPlugin,
} = require('@vuepress/plugin-register-components');
const componentDemoPlugin = require('./plugins/component-demo.js');

module.exports = {
  title: 'Swimm UI',
  base: '/swimm-ui/',
  description: `Swimm's Design System`,
  plugins: [
    componentDemoPlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  alias: {
    '@swimm/ui': path.resolve(__dirname, '../../src/'),
    '@theme/ToggleColorModeButton.vue': path.resolve(
      __dirname,
      './components/DarkModeToggle.vue'
    ),
  },
  markdown: {
    code: {
      lineNumbers: 5,
    },
  },
  theme: defaultTheme({
    sidebar: [
      {
        text: 'Foundations',
        collapsable: false,
        children: getSidebarGroup('/foundations'),
      },
      {
        text: 'Components',
        collapsable: false,
        children: getSidebarGroup('/components'),
      },
    ],
    navbar: [
      {
        text: 'Figma',
        link: 'https://www.figma.com/file/wHMtbUq5zXG9GDvP4BU3gi/Product---Design-System',
      },
    ],
    repo: 'swimmio/swimm-ui',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    contributors: false,
  }),
};

function getSidebarGroup(path) {
  return glob
    .sync('docs/**/*.md')
    .filter((file) => file.startsWith(`docs${path}`))
    .map((file) => file.replace(`docs`, ''))
    .map((file) => file.replace('.md', ''));
}
