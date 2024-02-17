import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ActivityForm from './components/ActivityLog/ActivityForm'
import ActivityLog from './components/ActivityLog/ActivityLog'
import ProgressForm from './components/ProgressTracker/ProgressForm'
import ProgressPost from './components/ProgressTracker/ProgressPost';

function App() {
  const [posts, setPosts] = useState([])
  const [progress, setProgress] = useState([0, 0, "1900-01-01"])

  if (posts) {
    console.log("wtf");
  }

  return (
    <div className="App">
      {/*    <header className="App-header">
         Fitness Tracker
       </header> */}

      <br></br>
      <br></br>
      <br></br>
      <div className='progress-container'>
        <ProgressForm progress={progress} setProgress={setProgress} />
        {posts.length>0 && <ProgressPost goals={progress} posts={posts} />}

      </div>
      {progress[0] > 0 && <ActivityForm setPosts={setPosts} />}

      {posts && <ActivityLog posts={posts} />}

    </div>

  );
}

export default App;
