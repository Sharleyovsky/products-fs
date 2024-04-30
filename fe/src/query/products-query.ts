import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

const QUERY_KEY = 'products';

export const useProductsQuery = (limit: number) =>
  useInfiniteQuery({
    queryKey: [QUERY_KEY],
    queryFn: async ({ pageParam }) => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/products?limit=${limit}&page=${pageParam}`
      );
      return res.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.items.length === limit) {
        return allPages.length + 1;
      }

      return null;
    },
  });
