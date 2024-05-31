import Image from 'next/image';

export default function BurgerButton() {
  return (
    <button type='button' title='Открыть меню'>
      <Image src='/burger-button.svg' alt='Кнопка меню' width={40} height={40} />
    </button>
  );
}
