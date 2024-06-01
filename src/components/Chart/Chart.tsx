import { Doughnut, getElementAtEvent } from 'react-chartjs-2';
import { useRef } from 'react';
import { Tooltip } from 'chart.js';

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
  return <Doughnut data={data} width={140} height={140} plugins={[textCenter]} options={options} />;
};
