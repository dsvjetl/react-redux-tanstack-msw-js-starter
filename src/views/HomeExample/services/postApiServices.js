import apiService from '../../../shared/services/ApiService.js';

const fetchPosts = () => {
  return apiService.get('/posts');
};

export { fetchPosts };
