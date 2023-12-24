import React, { useState } from 'react';

const ImageUploadBox = () => {
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
      <div id="upload-box" style={{ border: '2px dashed #aaa', borderRadius: '8px', padding: '20px', textAlign: 'center', cursor: 'pointer', width: '300px', height: '200px' ,position: 'relative',
          overflow: 'hidden' , marginRight:'700px' , marginBottom:'400px'}}>
        <label htmlFor="file-input">
          <span>Upload photo</span>
          <input type="file" id="file-input" style={{ display: 'none'  }} onChange={handleFileChange} />
        </label>
        {filePreview && (
            <img 
            src={filePreview}
            alt='slected file'
            style={{maxWidth:'100%' , Height: '100%' ,position: 'absolute',  left: 0, right: 0, bottom: 0,}}

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
