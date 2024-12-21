import styles from './HomeExample.module.scss';
import { usePosts } from './hooks/usePosts.js';
import { isMock } from '../../shared/utils/isMock.js';

const HomeExample = () => {
  const { data: posts, isLoading } = usePosts();

  const renderPosts = () => {
    return isLoading ? (
      <span>Loading posts...</span>
    ) : (
      <div>
        <h3>{isMock ? 'Mock data:' : 'Fetched data:'}</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <h1>dsvjetl React Starter</h1>
      {renderPosts()}
    </div>
  );
};

export { HomeExample };
