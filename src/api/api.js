const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/users`);

  return await response.json();
};

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);

  return await response.json();
};

export const fetchRepoData = async () => {
  const response = await fetch('https://api.github.com/repos/TanStack/query');

  return await response.json();
};
