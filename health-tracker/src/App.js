import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ActivityForm from './components/ActivityLog/ActivityForm'
import ActivityLog from './components/ActivityLog/ActivityLog'

function App() {
  const [posts, setPosts] = useState([])
  return (
    <div className="App">
      {/*    <header className="App-header">
         Fitness Tracker
       </header> */}
      <ActivityForm setPosts={setPosts} />
      {posts && <ActivityLog posts={posts} />}
    </div>

  );
}

export default App;
