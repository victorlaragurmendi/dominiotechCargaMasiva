
import './App.css';
import React, { useState } from 'react';

function App() {


  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const SeleccionarArchivo = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };


  const CargarArchivo = function () {
    console.log("se cargo el archivo");
  }
 
  

  return (
    <div className="App">
      <div className="contenedorExportMasiva">
        <span> <p>CARGA MASIVA :OBJETOS MODIFICADOS</p></span>

        <span><input type="file" name="file" onChange={SeleccionarArchivo} />
            {isFilePicked ? (
              <div>
                <p>Filename: {selectedFile.name}</p>
                <p>Filetype: {selectedFile.type}</p>
                <p>Size in bytes: {selectedFile.size}</p>
                <p>
                  lastModifiedDate:{' '}
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
        </span>
        <span><button onClick={CargarArchivo} >Cargar Archivo</button></span>
        <span><p>PLantilla de ejemplo  Carga Masiva Temporal <a>Descargar</a></p></span>
      </div>
    </div>
  );
}

export default App;
