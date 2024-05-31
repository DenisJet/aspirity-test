import Image from 'next/image';

export default function CustomSelect() {
  return (
    <div className='border border-gray-500 rounded-full inline-flex py-1.5 px-4 cursor-pointer'>
      <Image src='/avatar-small.png' height={24} width={24} alt='Аватар пользователя' />
      <Image src='/chevron-down.svg' height={24} width={24} alt='' />
    </div>
  );
}
