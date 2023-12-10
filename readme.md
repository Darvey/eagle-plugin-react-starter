
## Project setup
To use this starter, simply replace the "id" and "name" fields in the manifest.json file.
> you can retrieve a new id from the manifest.json file of a project that you created directly from Eagle

Installing the modules:
```bash
npm install
```

## Development mode
Pour commencer à développer, utilisez la commande:
```bash
npm run dev
```

## Production

Create a build with the command:
```
npm run build
```

To make the project work with a new build, you will need to modify the index.html file.
The part under 'dev-only' must be commented out. Conversely, the part under "prod-only" must be uncommented
by changing 'index-file-name' to the name of the file that was generated during the build in the `dist/assets/index...js` folder
```html
    <!-- dev-only -->
    <script type="module">
      import RefreshRuntime from 'http://localhost:5173/@react-refresh'
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
    </script>
    <script type="module" src="http://localhost:5173/@vite/client"></script>
    <script type="module" src="http://localhost:5173/index.jsx"></script>

    <!-- prod-only -->
    <!-- <script type="module" src="dist/assets/index-file-name.js"></script> -->
```
