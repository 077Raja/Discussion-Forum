
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:3003/home')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleCreatePost = () => {
    
    console.log('Create Post');
  };

  const handleReply = (postId) => {
   
    console.log(`Reply ${postId}`);
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={handleCreatePost}>Create Post</button>

      <div>
        <h3>Post List</h3>
        <ul>
          {posts.map(post => (
            <li key={post.postId}>
              <div>
                <strong>{post.postTitle}</strong>
              </div>
              <div>Comments 1 ,Post Reply 0</div>
              
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

