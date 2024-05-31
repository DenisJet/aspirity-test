import Header from '@/Layout/Header/Header';
import { mockData } from '@/mock-json';
import Image from 'next/image';

const user = mockData[0];

export default function Home() {
  return (
    <>
      <Header />
      <main className='max-w-screen-2xl mx-auto '>
        <a
          href=''
          title='назад'
          className='uppercase pb-2 2xl:px-5 flex items-center text-sm font-semibold text-gray-500'
        >
          <Image src='chevron-left.svg' alt='назад' width={24} height={24} />
          Вернуться к сотрудникам
        </a>
        <div className='py-8 px-4 bg-gray-800 md:px-10  md:pt-10 md:pb-5 rounded-xl'>
          <div className='max-w-screen-2xl  mx-auto md:flex'>
            <Image
              className='m-auto pb-4 md:ms-0 md:me-12 md:mt-0'
              src={user.avatar}
              alt='аватар пользователя'
              width={160}
              height={160}
            />
            <div>
              <p className='font-bold text-2xl text-center mb-6 md:text-5xl md:text-start md:leading-tight md:mb-8 md:mt-6'>
                {user.lastName}
                <br />
                {user.firstName}
              </p>
              <div className='text-center font-normal text-sm mb-6 md:text-start md:mb-12'>
                <p className='mb-4'>{user.position}</p>
                <p>{user.address}</p>
              </div>
            </div>
          </div>
          <div className='flex overflow-hidden'>
            <button
              className='bg-gray-800 uppercase text-sm font-semibold py-2.5 px-4 border-b-2 border-gray-700 whitespace-nowrap'
              type='button'
            >
              Основная информация
            </button>
            <button
              className='bg-gray-800 uppercase text-sm font-semibold py-2.5 px-4 border-b-2 border-indigo-500'
              type='button'
            >
              Отпуск
            </button>
            <button
              className='bg-gray-800 uppercase text-sm font-semibold py-2.5 px-4 border-b-2 border-gray-700'
              type='button'
            >
              Оборудование
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
