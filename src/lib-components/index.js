import Vue from 'vue';

const req = require.context('../components/', true, /\.(vue)$/i);

const fileIgnores = ['../components/Icon.vue']

const filterIgnores = (file) => {
    console.log('File Imported : ', file);
    return fileIgnores.indexOf(file) !== -1;
}

req.keys().filter(filterIgnores).forEach((fileName) => {
    // Get component config
    const componentConfig = req(fileName);
    const componentName = fileName.match(/\w+/)[0];
    // Register component globally
    Vue.component(
        componentName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        componentConfig.default || componentConfig
    );
});
