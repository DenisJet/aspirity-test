import HistoryCard, { HistoryCardProps } from '../HistoryCard/HistoryCard';

interface HistoryListProps {
  historyList: HistoryCardProps[];
}

export default function HistoryList({ historyList }: HistoryListProps) {
  return (
    <ul>
      {historyList &&
        historyList.map((e) => {
          return (
            <li key={e.id} className='pb-4 border-b-2 border-gray-700 mb-4 last:border-none last:pb-0 last:mb-0'>
              <HistoryCard id={e.id} type={e.type} dateStart={e.dateStart} dateEnd={e.dateEnd} duration={e.duration} />
            </li>
          );
        })}
    </ul>
  );
}
