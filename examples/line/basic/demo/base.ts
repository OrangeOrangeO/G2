import { Chart } from '@antv/g2';

const data = [
  { year: '91', value: 3 },
  { year: '92', value: 4 },
  { year: '93', value: 3.5 },
  { year: '94', value: 5 },
  { year: '95', value: 4.9 },
  { year: '96', value: 6 },
  { year: '97', value: 7 },
  { year: '98', value: 9 },
  { year: '99', value: 13 },
];
const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
});

chart.data(data);
chart.scale({
  year: {
    range: [0, 1],
  },
  value: {
    min: 0,
    nice: true,
  },
});

chart.tooltip({
  showCrosshairs: true, // 展示 Tooltip 辅助线
  shared: true,
});

chart.line().position('year*value').label('value');
chart.point().position('year*value');

chart.render();
