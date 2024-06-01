import Image from 'next/image';
import { HistoryCardProps } from '../HistoryCard/HistoryCard';

interface DesktopHistoryListProps {
  historyList: HistoryCardProps[];
}

export default function DesktopHistoryList({ historyList }: DesktopHistoryListProps) {
  return (
    <table className='table-fixed w-full'>
      <thead>
        <tr className='flex pb-4 border-b-2 border-gray-700 mb-4 px-2'>
          <th className='text-sm text-gray-500 ms-0 me-auto'>Тип</th>
          <th className='text-sm text-gray-500'>Даты отпуска</th>
          <th className='text-sm text-gray-500 ms-auto me-0'>Количество дней</th>
        </tr>
      </thead>
      <tbody>
        {historyList &&
          historyList.map((e) => {
            return (
              <tr
                key={e.id}
                className='flex pb-4 border-b-2 border-gray-700 mb-4 last:border-none last:pb-0 last:mb-0  px-2'
              >
                <td className='ms-0 me-auto'>{e.type}</td>
                <td className='flex'>
                  {e.dateStart}
                  <span className='mx-2'>
                    <Image src='arrow-right.svg' width={24} height={24} alt='' />
                  </span>
                  {e.dateEnd}
                </td>
                <td className='ms-auto me-0'>{e.duration}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
