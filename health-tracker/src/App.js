import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ActivityForm from './components/ActivityLog/ActivityForm'
import ActivityLog from './components/ActivityLog/ActivityLog'
import ProgressForm from './components/ProgressTracker/ProgressForm'
import ProgressPost from './components/ProgressTracker/ProgressPost';

function App() {
  const [posts, setPosts] = useState([])
  const [progress, setProgress] = useState([0,0,"1900-01-01"])

  
  return (
    <div className="App">
      {/*    <header className="App-header">
         Fitness Tracker
       </header> */}
      
      <br></br>
      <br></br>
      <br></br>
      <ProgressForm progress = {progress} setProgress={setProgress} />
      <ActivityForm setPosts={setPosts} />
      
      {posts && <ActivityLog posts={posts} />}
      {posts && <ProgressPost goals={progress}  posts = {posts}/>}

    </div>

  );
}

export default App;
