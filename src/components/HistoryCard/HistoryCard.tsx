import Image from 'next/image';

export interface HistoryCardProps {
  id: number;
  type: string;
  dateStart: string;
  dateEnd: string;
  duration: string;
}

export default function HistoryCard({ id, type, dateStart, dateEnd, duration }: HistoryCardProps) {
  return (
    <div>
      <div className='mb-4'>
        <p className='text-sm text-gray-500 mb-2'>Тип</p>
        <p>{type}</p>
      </div>
      <div className='mb-4'>
        <p className='text-sm text-gray-500 mb-2'>Даты отпуска</p>
        <div className='flex'>
          {dateStart}
          <span className='mx-2'>
            <Image src='arrow-right.svg' width={24} height={24} alt='' />
          </span>
          {dateEnd}
        </div>
      </div>
      <div className=''>
        <p className='text-sm text-gray-500 mb-2'>Количество дней</p>
        <p>{duration}</p>
      </div>
    </div>
  );
}
