import logo from './logo.svg';
import { useEffect, useState } from 'react';
import ActivityForm from './components/ActivityLog/ActivityForm'
import ActivityLog from './components/ActivityLog/ActivityLog'
import ProgressForm from './components/ProgressTracker/ProgressForm'
import ProgressPost from './components/ProgressTracker/ProgressPost';

import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([])
  const [progress, setProgress] = useState([0, 0, "1900-01-01"])



  const fetchPosts = () => {
    axios.get("https://65e0e270d3db23f7624a3bf8.mockapi.io/act/activities")
      .then((response) => {
        setPosts(response.data);
      })
  }

  // Fetches the activities from MockApi
  useEffect(() => {
    fetchPosts();
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Fitness Tracker</h1>
      </header>

      <div className='progress-container'>
        <ProgressForm progress={progress} setProgress={setProgress} />
        {posts.length > 0 && <ProgressPost goals={progress} posts={posts} />}

      </div>
      {progress[0] > 0 && <ActivityForm setPosts={setPosts} />}

      {posts && <ActivityLog posts={posts} />}

    </div>

  );
}

export default App;
