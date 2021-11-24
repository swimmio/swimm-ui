---
id: 2AS4UBp4N6oxjAORmhCQ
name: How the component library is exported and imported
file_version: 1.0.2
app_version: 0.6.7-1
file_blobs:
  src/lib-components/index.js: 2320e6ad6b053ba9b125ef44325c910e5711a2a7
---

Using our components library in another Vue project is done by importing `📄 src/lib-components/index.js` into the other projects `main.js` file

`import 'swimm-ui/src/lib-components';`

As we'll see below -`📄 src/lib-components/index.js` is adding the request components library to the Vue project importing it by itself

<br/>

Find all files inside the `../components/` folder
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/lib-components/index.js
```javascript
⬜ 1      import Vue from 'vue';
⬜ 2      
🟩 3      const req = require.context('../components/', true, /\.(vue)$/i);
⬜ 4      
⬜ 5      const fileIgnores = [];
⬜ 6      
```

<br/>

Filter the ignored files (files that won't be exposed to vue)
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/lib-components/index.js
```javascript
⬜ 2      
⬜ 3      const req = require.context('../components/', true, /\.(vue)$/i);
⬜ 4      
🟩 5      const fileIgnores = [];
🟩 6      
🟩 7      const filterIgnores = (file) => {
🟩 8          return fileIgnores.indexOf(file) === -1;
🟩 9      }
🟩 10     
🟩 11     req.keys().filter(filterIgnores).forEach((fileName) => {
🟩 12         // Get component config
🟩 13         const componentConfig = req(fileName);
```

<br/>

Exposing the selected component (iterator) to Vue using `Vue.component` function
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/lib-components/index.js
```javascript
⬜ 14         const nameMatches = fileName.match(/\w+/);
⬜ 15         const componentName = nameMatches !== null ? nameMatches[0] : '';
⬜ 16         // Register component globally
🟩 17         Vue.component(
🟩 18             componentName,
🟩 19             // Look for the component options on `.default`, which will
🟩 20             // exist if the component was exported with `export default`,
🟩 21             // otherwise fall back to module's root.
🟩 22             componentConfig.default || componentConfig
🟩 23         );
⬜ 24     });
```

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/pw8tVz0TAgLaoHABDlsw/docs/2AS4UBp4N6oxjAORmhCQ).