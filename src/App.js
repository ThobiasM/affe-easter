import './App.css';
import { useState } from 'react';
import Start from './routes/Start';
import Post1 from './routes/Post1';

function App() {
  const [currentPost, setCurrentPost] = useState(0);
  const handleClick = () => {
    setCurrentPost(currentPost + 1);
  }
  return (
    <div className="flexConainer">
      {currentPost === 0 && <Start handleClick={handleClick} />}
      {currentPost === 1 && <Post1 />}
    </div>
  );
}

export default App;
