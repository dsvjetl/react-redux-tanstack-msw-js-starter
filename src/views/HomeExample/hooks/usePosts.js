import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../constants/queryKeys.js';
import { fetchPosts } from '../services/postApiServices.js';

const usePosts = () =>
  useQuery({
    queryKey: [queryKeys.posts],
    queryFn: fetchPosts,
    refetchOnWindowFocus: false,
  });

export { usePosts };
