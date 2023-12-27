import React, { useState } from 'react';

const ImageUploadBox = ({aiImage}) => {
 console.log(aiImage)
  return (
    <div style={{marginLeft:'150px' , marginTop:'50px' }}>
      <div id="upload-box" style={{ border: '3px dashed #aaa', borderRadius: '8px', padding: '20px', textAlign: 'center', cursor: 'pointer', width: '350px', height: '250px' ,position: 'relative',
          overflow: 'hidden' , marginRight:'700px' , marginBottom:'400px'}}>
          <span>Ai-generated output</span>
       

          {aiImage && (
            <img 
            src={aiImage}
            alt='slected file'
            style={{maxWidth:'100%' , Height: '100%' ,position: 'absolute',  left: 0, right: 0, bottom: 0}}

            />
        )}

        <div id="selected-file" style={{ marginTop: '10px', fontSize: '14px' }}>
          {/* {selectedFile && `Selected File: ${selectedFile.name}`} */}
        </div>
      </div>
      
    </div>
  );
};

export default ImageUploadBox;
