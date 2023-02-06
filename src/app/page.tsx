import { users } from '@utils/fetchData';

type Props = {
  user: {};
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
};

export default async function Home({}: Props) {
  return (
    <main>
      {users.data.map((user: Props) => (
        <div key={user.id} className='user'>
          <h2>{user.name}</h2>
          <div>{user.email}</div>
          <div>{user.address.city}</div>
          <div>{user.phone}</div>
        </div>
      ))}
    </main>
  );
}
