import VTooltip from 'v-tooltip';
import 'fontaweswimm/src/fonts/fontaweswimm/style.css';
import '../../public/styles/index.css';
import CompositionAPI from '@vue/composition-api';
import ComponentDemo from './components/ComponentDemo.vue';

export default ({ Vue }) => {
  Vue.use(VTooltip);
  Vue.use(CompositionAPI);
  Vue.component('ComponentDemo', ComponentDemo);
};
