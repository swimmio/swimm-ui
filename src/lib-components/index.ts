import Vue from 'vue';

const req = require.context('../components/', true, /\.(vue)$/i);

const fileIgnores: string[] = ['./Icon/Icon.vue'];

const filterIgnores = (file: string) => {
    return fileIgnores.indexOf(file) === -1;
}

req.keys().filter(filterIgnores).forEach((fileName: string) => {
    // Get component config
    const componentConfig = req(fileName);
    const nameMatches = fileName.match(/\w+/);
    const componentName = nameMatches !== null ? nameMatches[0] : '';
    // Register component globally
    Vue.component(
        componentName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        componentConfig.default || componentConfig
    );
});
