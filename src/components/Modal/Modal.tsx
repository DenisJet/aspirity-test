'use client';
import { useContext } from 'react';
import styles from './Modal.module.css';
import { ModalContext } from '@/context/modal.context';
import HistoryList from '../HistoryList/HistoryList';
import DesktopHistoryList from '../DesktopHistoryList/DesktopHistoryList';
import { HistoryCardProps } from '../HistoryCard/HistoryCard';
import Image from 'next/image';

interface ModalProps {
  historyList: HistoryCardProps[];
}

export default function Modal({ historyList }: ModalProps): JSX.Element {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <div className={isOpen ? `${styles.modal} ${styles.active}` : styles.modal} onClick={() => setIsOpen(false)}>
      <div
        className={isOpen ? `${styles.modalContent} ${styles.active}` : styles.modalContent}
        onClick={(evt) => evt.stopPropagation()}
      >
        <div className='mb-4 py-8 px-4 bg-gray-800 md:px-10  md:px-8 rounded-xl w-full'>
          <div className='flex mb-4'>
            <span className='md:text-2xl'>История отпусков</span>
            <button className='ms-auto me-0' type='button' title='Закрыть' onClick={() => setIsOpen(false)}>
              <Image src='exit.svg' width={24} height={24} alt='' />
            </button>
          </div>
          <div className='lg:hidden'>
            <HistoryList historyList={historyList} />
          </div>
          <div className='hidden lg:block'>
            <DesktopHistoryList historyList={historyList} />
          </div>
        </div>
      </div>
    </div>
  );
}
