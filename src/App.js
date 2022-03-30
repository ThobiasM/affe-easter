import './App.css';
import { useState } from 'react';
import Start from './routes/Start';
import Post1 from './routes/Post1';
import Answer1 from './routes/Answer1';
import Post2 from './routes/Post2';

function App() {
  const [currentPost, setCurrentPost] = useState(0);
  const handleNextPost = () => {
    console.log("Clicked");
    setCurrentPost(currentPost + 1);
  }

  const [postFound, setPostFound] = useState(false);
    const handlePostFound = () => {
        setPostFound(true);
    }
  return (
    <div className="flexConainer">
      {currentPost === 0 && <Start handleClick={handleNextPost} />}
      {currentPost === 1 && !postFound && <Post1 handlePostFound={handlePostFound} />}
      {currentPost === 1 && postFound && <Answer1 handleNextPost={handleNextPost} />}
      {currentPost === 2 && <Post2 handleClick={handleNextPost} />}
    </div>
  );
}

export default App;
