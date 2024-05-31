import Image from 'next/image';

export default function Header(): JSX.Element {
  return (
    <header>
      <div>
        <div className='md:hidden'>
          <Image src='Banner-767x500.webp' height={500} width={767} alt='Логотип компании' />
        </div>
        <div className='hidden md:inline-flex lg:hidden'>
          <Image src='Banner-1023x500.webp' height={500} width={1023} alt='Логотип компании' />
        </div>
      </div>
      header
    </header>
  );
}
