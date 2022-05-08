import DefaultTheme from 'vitepress/theme';
import VTooltip from 'v-tooltip';
import 'fontaweswimm/src/fonts/fontaweswimm/style.css';
import '../../../public/styles/index.css';
import '../../../src/components/register-components';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(VTooltip);
  },
};
