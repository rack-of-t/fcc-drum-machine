import './App.css';
import audioClips from './Components/audioClips';
import { useEffect , useState} from 'react';

function App() {
const [displayText, setDisplayText] = useState('Text Field');

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase());
    })
  })

  function playSound(selector,text) {
    const audio = document.getElementById(selector);
    audio.play();
    setDisplayText(text)
  }

  return (
    <div className="App">
      <body className='App-body'>
        <div id="drum-machine">
          <h1>Drum Machine</h1>
          <div id="clip-display">{displayText}</div>
          <div id="clip-bank">
            {audioClips.map((clip) => (
              <button 
                key={clip.url} 
                className='drum-pad' 
                id={clip.description} 
                onClick={() => {
                  playSound(clip.keyTrigger,clip.description)
                }
              }
              >
            {clip.keyTrigger}
            <audio 
              src={clip.url} 
              className='clip' 
              id={clip.keyTrigger}>
            </audio>
          </button>
            ))}            
          </div>
          </div>
      </body>
    </div>
  );
}

export default App;
