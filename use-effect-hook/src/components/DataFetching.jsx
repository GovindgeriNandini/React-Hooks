import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      {/* <ul>
                {posts.map(post => (
                    <li key = {post.id}>
                        {post.title}
                    </li>
                ))}
            </ul> */}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <h2>{posts.title}</h2>
    </div>
  );
};

export default DataFetching;
