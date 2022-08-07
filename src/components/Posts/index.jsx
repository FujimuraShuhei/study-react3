import { useCallback, useEffect, useState } from 'react';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) {
        throw new Error('エラーは発生したため、データの取得に失敗しました。');
      }
      const json = await res.json();
      setPosts(json);
    } catch (error) {
      seterror(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      {loading ? (
        <div>ローディング中</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : posts.length > 0 ? (
        <ol>
          {posts.map((post) => {
            return <li key={posts.id}>{post.title}</li>;
          })}
        </ol>
      ) : (
        <div>データは空です</div>
      )}
    </div>
  );
};
