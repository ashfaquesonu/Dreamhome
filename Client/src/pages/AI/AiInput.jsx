import React, { useState } from 'react';

import FileBase64 from 'react-file-base64'
const ImageUploadBox = ({setImage,image}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview , setFilePreview] = useState(null)
 
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if(file) {
        setSelectedFile(file)
        const reader = new FileReader()

        reader.onloadend = () =>{
            setFilePreview(reader.result)
        }
        reader.readAsDataURL(file)
    }else{
        setSelectedFile(null)
        setFilePreview(null)
    }
  };

  return (
    <div style={{marginLeft:'150px' , marginTop:'50px' }}>
      <div id="upload-box" style={{ border: '3px dashed #aaa', borderRadius: '8px', padding: '20px', textAlign: 'center', cursor: 'pointer', width: '350px', height: '250px' ,position: 'relative',
          overflow: 'hidden' , marginRight:'700px' , marginBottom:'400px'}}>
        <label htmlFor="file-input">
          <span>Upload photo</span>
          <FileBase64
              type='file'
              multiple={false}
              onDone={({ base64 }) => setImage( base64 )}
            />
        </label>

        {image && (
            <img 
            src={image}
            alt='slected file'
            style={{maxWidth:'100%' , Height: '100%' ,position: 'absolute',  left: 0, right: 0, bottom: 0}}

            />
        )}



        <div id="selected-file" style={{ marginTop: '10px', fontSize: '14px' }}>
          {selectedFile && `Selected File: ${selectedFile.name}`}
        </div>
      </div>
      
    </div>
  );
};

export default ImageUploadBox;
