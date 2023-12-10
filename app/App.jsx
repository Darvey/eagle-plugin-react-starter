import { useEffect, useState } from 'react';

let fs = require('fs');

function fsExemple(filePath) {

  if(!filePath) return;

  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    console.log(data);
  });

}

const App = () => {

  const [files, setFiles] = useState(false);

  eagle.onPluginCreate(async (plugin) => {
    let files = await eagle.item.get();
    setFiles(files);
    fsExemple();
  });

  return (
    <h1>
      {files && files[0].name}
    </h1>
  )
}

export {
  App
}