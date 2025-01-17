import React, { useState } from 'react'

function AudioTranscriber() {

    const[file,setFile]=useState(null);
    const[transcription,setTranscription]=useState("");

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);
    
        try {
            const response = await fetch('http://localhost:8080/transcribe', {
                method: 'POST', // Specify the POST method
                body: formData, // Include the FormData in the request body
            });
            const data = await response.json();
            setTranscription(data);
        } catch (error) {
            console.error("Error transcribing audio", error);
        }
    };

  return (
    <div>
        <h2>Audio to Text Transcriber</h2>

        <div className='file-input'>
            <input 
                type='file' 
                accept='audio/' 
                onChange={(e)=>setFile(e.target.value[0])}/>
        </div>

        <button className="upload-button" onClick={handleUpload}>Upload and Transcribe</button>

        <div className="transcription-result">
            <h2>Transcription Result</h2>
            <p>{transcription}</p>
        </div>
    </div>
  )
}

export default AudioTranscriber