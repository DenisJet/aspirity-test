'use client';
import { Chart } from '@/components/Chart/Chart';
import Header from '@/Layout/Header/Header';
import { mockData } from '@/mock-json';
import Image from 'next/image';
import 'chart.js/auto';

const user = mockData[0];

const data = {
  datasets: [
    {
      data: [user.statistics.available, user.statistics.used, user.statistics.planned],
      backgroundColor: ['#25824F', '#DB4546', '#FFB649'],
      hoverBackgroundColor: ['#25824F', '#DB4546', '#FFB649'],
      borderWidth: 0,
      weight: 2,
    },
  ],
};

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
        <div className='mb-4 py-8 px-4 bg-gray-800 md:px-10  md:pt-10 md:pb-5 rounded-xl'>
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
        <div className='mb-4 md:me-4 py-8 px-4 bg-gray-800 md:px-10  md:px-8 rounded-xl max-w-lg'>
          <div className='flex'>
            <p className='me-2 text-base md:text-2xl'>Статистика</p>
            <Image src='/info.svg' width={24} height={24} alt='' title='1 раб. месяц = 3 дня отпуска' />
          </div>
          <div className='my-4'>
            <Chart data={data} />
          </div>
          <ul className='text-base'>
            <li className='mb-2 flex py-3 px-2.5 border border-gray-500 rounded-full'>
              <Image className='me-2' src='/badge-green.svg' width={6} height={6} alt='' />
              Доступно сейчас<span className='ms-auto me-0'>{user.statistics.available} дня</span>
            </li>
            <li className='mb-2 flex py-3 px-2.5 border border-gray-500 rounded-full'>
              <Image className='me-2' src='/badge-yellow.svg' width={6} height={6} alt='' />
              Запланировано<span className='ms-auto me-0'>{user.statistics.planned} дней</span>
            </li>
            <li className='mb-2 flex py-3 px-2.5 border border-gray-500 rounded-full'>
              <Image className='me-2' src='/badge-red.svg' width={6} height={6} alt='' />
              Использовано/недоступно<span className='ms-auto me-0'>{user.statistics.used} дня</span>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
