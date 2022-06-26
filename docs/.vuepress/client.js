import { defineClientConfig } from '@vuepress/client';
import 'fontaweswimm/src/fonts/fontaweswimm/style.css';
import '../../public/styles/index.css';

export default defineClientConfig(({ app }) => {
  app.use(VTooltip);
});
