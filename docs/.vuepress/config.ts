import glob from 'glob';
import { path } from '@vuepress/utils';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import componentDemoPlugin from './plugins/component-demo';
import globPromise from 'glob-promise';
import { parse } from 'vue-docgen-api';
import { defaultTheme } from '@vuepress/theme-default';

export default {
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
        link: '/',
        children: getSidebarGroup('/foundations'),
      },
      {
        text: 'Components',
        link: '/',
        children: getSidebarGroup('/components'),
      },
    ],
    navbar: [
      {
        text: 'Fontaweswimm',
        link: 'https://swimmio.github.io/fontaweswimm/src/fonts/fontaweswimm/demo.html',
      },
      {
        text: 'Figma',
        link: 'https://www.figma.com/file/wHMtbUq5zXG9GDvP4BU3gi/Product---Design-System',
      },
    ],
    repo: 'swimmio/swimm-ui',
    docsDir: 'docs',
    docsBranch: 'main',
    editLink: true,
    contributors: false,
  }),
  async onPrepared(app) {
    const componentsApi = await generateComponentsApi();

    await app.writeTemp(
      'componentsApi.js',
      `export const apiData = ${JSON.stringify(componentsApi)}`
    );
  },
};

function getSidebarGroup(path) {
  return glob
    .sync('docs/**/*.md')
    .filter((file) => file.startsWith(`docs${path}`))
    .map((file) => file.replace(`docs`, ''))
    .map((file) => file.replace('.md', ''));
}

async function generateComponentsApi() {
  const componentsPaths = await globPromise.promise('src/components/**/**.vue');
  return Promise.all(
    componentsPaths.map(async (component) => {
      return parse(path.resolve(__dirname, `../../${component}`));
    })
  );
}
