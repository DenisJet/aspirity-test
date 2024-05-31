import Image from 'next/image';

export default function Home() {
  return (
    <main className='max-w-screen-2xl 2xl:px-5  mx-auto flex'>
      <a href='' title='назад' className='flex items-center text-sm font-semibold text-gray-500'>
        <Image src='chevron-left.svg' alt='назад' width={24} height={24} />
        Вернуться к сотрудникам
      </a>
    </main>
  );
}
