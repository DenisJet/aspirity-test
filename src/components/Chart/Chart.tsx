import { ArcElement, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

//ChartJS.register(ArcElement, Tooltip, Legend);

// const data = {
//   datasets: [
//     {
//       data: [32, 4, 8],
//       backgroundColor: ['#25824F', '#DB4546', '#FFB649'],
//       hoverBackgroundColor: ['#25824F', '#DB4546', '#FFB649'],
//       borderWidth: 0,
//       weight: 2,
//     },
//   ],
// };

const textCenter = {
  id: 'textCenter',
  beforeDatasetsDraw(chart: any) {
    const { ctx, data } = chart;
    ctx.save();
    ctx.font = 'normal 34px sans-serif';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      `${data.datasets[0].data[0]} дня`,
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};

export const Chart = ({ data }) => {
  return (
    <div>
      <Doughnut data={data} width={160} height={160} plugins={[textCenter]} />
    </div>
  );
};
