import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchRepoData } from '../api/api';

const Home = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['data'],
    queryFn: fetchRepoData,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    staleTime: 60000,
    cacheTime: 300000,
  });

  if (isPending) return 'Loading...';

  if (error) return `An error has occurred:  ${error.message}`;

  const handleLogin = () => {
    if (!email) {
      alert('Please enter an email');
      return;
    }

    console.log('Submitted Email:', email);
    navigate('/posts');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center min-h-240">
        <h1 className=" text-center text-7xl mb-4">
          Unleash the power of React Query
        </h1>
        <p className="max-w-2xl text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem
          aperiam quod saepe reprehenderit rerum veniam voluptatibus explicabo
          repellat molestias voluptatum facilis architecto tempore nemo, atque
          suscipit iusto ipsam in,
        </p>

        <div className="flex min-w-[40%] my-8">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-400 p-2 rounded-t-md rounded-b-md bg-gray-900 w-[80%] outline-none focus:outline-none"
            placeholder="Enter your email address"
            required
          />
          <button
            type="button"
            onClick={handleLogin}
            className="bg-green-500 flex-1 rounded-r-md  ml-[-6px] hover:font-bold cursor-pointer transition-all duration-500 ease-in-out  hover:text-gray-600"
          >
            Get Notified
          </button>
        </div>

        <div className="max-w-4xl text-center flex flex-col gap-4">
          <h1>{data.full_name}</h1>
          <p>{data.description}</p>
          <p className="">
            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
          </p>

          <div>{isFetching ? 'Updating...' : ''}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
