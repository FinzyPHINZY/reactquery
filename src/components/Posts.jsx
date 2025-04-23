import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchPosts } from '../api/api';

const Posts = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    staleTime: 60000,
    cacheTime: 300000,
  });

  // if (isPending) return 'Loading...';

  if (error) return `An error has occurred:  ${error.message}`;

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center justify-center min-h-240">
        {isPending && (
          <h1 className="text-center text-7xl mb-4">This is the Posts Page</h1>
        )}
        <div className="grid grid-cols-5 gap-8">
          {data?.map(({ id, title, body }) => (
            <div className="flex flex-col gap-4 capitalize" key={id}>
              <p className="text-center font-bold text-lg">{title}</p>
              <p className="text-center italic text-gray-200">{body}.</p>
            </div>
          ))}
        </div>

        <div>{isFetching ? 'Updating...' : ''}</div>
      </div>
    </div>
  );
};

export default Posts;
