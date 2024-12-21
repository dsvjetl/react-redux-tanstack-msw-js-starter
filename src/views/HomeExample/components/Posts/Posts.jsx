import { isMock } from '../../../../shared/utils/isMock.js';
import PropTypes from 'prop-types';

const Posts = ({ posts }) => {
  return (
    <div>
      <h3>{isMock ? 'Mocked data:' : 'Fetched XHR data:'}</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    }).isRequired
  ),
};

export { Posts };
