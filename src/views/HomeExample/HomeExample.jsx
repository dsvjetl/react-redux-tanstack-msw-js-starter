import styles from './HomeExample.module.scss';
import { usePosts } from './hooks/usePosts';
import { Posts } from './components/Posts';

const HomeExample = () => {
  const { data: posts, isLoading } = usePosts();

  const renderPosts = () => {
    return isLoading ? <span>Loading posts...</span> : <Posts posts={posts} />;
  };

  return (
    <div className={styles.wrapper}>
      <h1>dsvjetl React Starter</h1>
      {renderPosts()}
    </div>
  );
};

export default HomeExample;
