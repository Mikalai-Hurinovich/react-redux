import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const PostList: React.FC = () => {
  const { posts, error, loading } = useTypedSelector((state) => state.posts);

  const { fetchPosts } = useActions();

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            Post #{post.id} - {post.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
