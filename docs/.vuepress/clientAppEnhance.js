import { defineClientAppEnhance } from '@vuepress/client';
import VTooltip from 'v-tooltip';
import 'fontaweswimm/src/fonts/fontaweswimm/style.css';
import '../../public/styles/index.css';

export default defineClientAppEnhance(({ app }) => {
  app.use(VTooltip);
});
