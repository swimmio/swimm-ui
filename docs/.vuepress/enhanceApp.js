import VTooltip from 'v-tooltip';
import 'fontaweswimm/src/fonts/fontaweswimm/style.css';
import '../../public/styles/index.css';
import '../../src/lib-components';
import '../../public/img/loading.gif';
import VueCompositionAPI from '@vue/composition-api';

export default ({ Vue }) => {
  Vue.use(VueCompositionAPI);
  Vue.use(VTooltip);
};
