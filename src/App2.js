import React, { useRef, useState } from 'react';
import { FileDrop } from ''
function App2() {
        
    const fileInputRef = useRef(null);

    const onFileInputChange = (event) => {
        const { files } = event.target;
        console.log(files)
        console.log('lastModified  ' +files[0].lastModified);
        console.log('lastModifiedDate  ' +files[0].lastModifiedDate);
        console.log('name  '+files[0].name);
        console.log('size in bytes '+files[0].size);
        console.log('type  '+files[0].type);
        console.log('webkitRelativePath  '+files[0].webkitRelativePath);
        
    }

    const datos= <h1></h1>
    const onTargetClick = () => {
        fileInputRef.current.click()
    }

    return (
        <div>
            <p>react-file-drop</p>
            <input
                onChange={onFileInputChange}
                ref={fileInputRef}
                type="file"
                className="hidden"
            />
            <FileDrop
                onTargetClick={onTargetClick}>
            </FileDrop>
            <div>
                {datos}
            </div>
        </div>
    )
}

export default App2;