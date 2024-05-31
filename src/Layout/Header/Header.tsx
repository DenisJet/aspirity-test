import BurgerButton from '@/components/BurgerButton/BurgerButton';
import Button from '@/components/Button/Button';
import CustomSelect from '@/components/CustomSelect/CustomSelect';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='max-w-screen-2xl 2xl:px-5 mx-auto px-4 py-6 flex items-center'>
      <div>
        <div className='md:hidden'>
          <Image src='/logo-mobile.png' height={30} width={135} alt='Логотип компании' />
        </div>
        <div className='hidden md:inline-flex'>
          <Image src='/logo-desktop.png' height={40} width={180} alt='Логотип компании' />
        </div>
      </div>
      <div className='flex ms-auto me-0 gap-x-2 items-center'>
        <div className='hidden md:block flex'>
          <div className='me-2 inline-block'>
            <Button>Создать счет</Button>
          </div>
          <Button>Корзина</Button>
        </div>
        <CustomSelect />
        <BurgerButton />
      </div>
    </header>
  );
}
