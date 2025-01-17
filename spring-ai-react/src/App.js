
import './App.css';
import { useState } from 'react';
import ImageGenerator from './component/ImageGenerator';
import ChatComponent from './component/ChatComponent';
import ReceipeGenerator from './component/ReceipeGenerator';
import AudioTranscriber from './component/AudioTranscriber';

function App() {

  const[activeTab,setActiveTab]=useState('image-generator');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className="App">

      <button 
          className={activeTab==="image-generator" ? 'active' : ''}
          onClick={() => handleTabChange('image-generator')}>
            Image Generator
      </button>

      <button 
          className={activeTab==='chat' ? 'active' : ''}
          onClick={ () => handleTabChange('chat') }>
            Ask AI
      </button>

      <button
          className={activeTab==='receipe-generator' ? 'active' : ''}
          onClick={ () => handleTabChange('receipe-generator') }>
            Receipe Generator
      </button>

      <button
          className={activeTab==='audio-transcriber' ? 'active' : ''}
          onClick={ () => handleTabChange('audio-transcriber') }>
            Audio Transcriber
      </button>

      <div>
        {activeTab==="image-generator" && <ImageGenerator/>}
        {activeTab==="chat" && <ChatComponent/>}
        {activeTab==="receipe-generator" && <ReceipeGenerator/>}
        {activeTab==="audio-transcriber" && <AudioTranscriber/>}
      </div>
    </div>
  );
}

export default App;
