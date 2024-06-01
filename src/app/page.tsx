'use client';
import { mockData } from '@/mock-json';
import Link from 'next/link';

const user = mockData;

export default function Home() {
  return (
    <main className='m-5 p-5 max-w-screen-2xl mx-auto '>
      <p className='mb-4'>Список сотрудников</p>
      <ul className='ps-4'>
        {user.map((user) => {
          return (
            <li className='mb-1' key={user.id}>
              <Link className='hover:opacity-30' href={user.link}>
                {`${user.firstName} ${user.lastName}`}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
