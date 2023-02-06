import axios from 'axios';

export default async function getData() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const { data, status } = await axios(url);
  return { data, status };
}

export const users = await getData();