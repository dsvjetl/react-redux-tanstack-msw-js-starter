import styles from './Home.module.scss';
import { usePosts } from './hooks/usePosts.js';

const Home = () => {
  const { data, isLoading } = usePosts();

  console.log({ data });

  return (
    <div className={styles.wrapper}>
      <h1>dsvjetl React Starter</h1>
    </div>
  );
};

export { Home };
