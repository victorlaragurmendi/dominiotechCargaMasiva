
import './App.css';
import React, { useState } from 'react';

// librerias para arrastrar archivos 
import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

//libreria para  barra de carga 
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';






function App() {

  //funcion para gestionar archivos aceptados
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, [])




  // logica  arrastrar archivos
  const maxLength = 20;

  function nameLengthValidator(file) {
    if (file.name.length > maxLength) {
      return {
        code: "name-too-large",
        message: `Name is larger than ${maxLength} characters`
      };
    }
  
    return null
  }


  const {
    acceptedFiles,
    fileRejections,
    open,
    getRootProps,
    getInputProps
  } = useDropzone({
    validator: nameLengthValidator
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));
  
 
  
  //  barra de carga
  const percentage = 59;
  const needDominantBaselineFix = true;



  return (
    <div className="App">
      <div className="contenedorExportMasiva">
        <span> <p>CARGA MASIVA :OBJETOS MODIFICADOS</p></span>

       
    <div className="contenedorDragDrop">
        <div   {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          <em>(Only files with name less than 20 characters will be accepted)</em>
        </div>
        <button type="button" onClick={open}>
            Open File Dialog
        </button>
    </div>   
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    

        <span><button onClick={onDrop} >Cargar Archivo</button></span>
        <span><p>PLantilla de ejemplo  Carga Masiva Temporal <a>Descargar</a></p></span>

     
       <div className="BarraCarga">
          <CircularProgressbar
            value={percentage}
            text={
              <tspan dy={needDominantBaselineFix ? -15 : 0}>{percentage}%</tspan>
            }
          />
       </div>

      </div>
    </div>
  );
}

export default App;
