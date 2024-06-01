import { ArcElement, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

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

export const Chart = ({ data, options }: any) => {
  return (
    <div>
      <Doughnut data={data} width={160} height={160} plugins={[textCenter]} options={options} />
    </div>
  );
};
