import React, { useState, useEffect } from "react";
import axios from "axios";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        console.log(response.data);
        // set data to the state
        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []); 

  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
