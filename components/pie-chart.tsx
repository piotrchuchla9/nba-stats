import React from "react";
import { useTranslation } from "react-i18next";
import { Cell, Legend, Pie, PieChart, Sector } from "recharts";

const COLORS = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#00ed3b",
  "#f28900",
  "#f200da",
];

type Data = {
  name: string;
  value: number;
};

interface CustomActiveShapeProps {
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  fill?: string;
  payload?: any;
  percent?: number;
  value?: number;
  showPercent?: number;
}

interface CustomActiveShapePieChartProps {
  data: Data[];
  activeIndex?: number;
  visibleLegend?: boolean;
  animationDuration?: number;
  showPercent?: boolean;
  showValue?: boolean;
}

const CustomActiveShapePieChart: React.FC<CustomActiveShapePieChartProps> = ({
  data,
  showValue = true,
  showPercent = true,
  visibleLegend = false,
  animationDuration = 500,
}) => {
  const { t } = useTranslation();
  const renderActiveShape = (props: CustomActiveShapeProps) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      payload,
      fill,
      percent,
      value,
    } = props;
    const sin = midAngle && Math.sin(-RADIAN * midAngle);
    const cos = midAngle && Math.cos(-RADIAN * midAngle);
    const sx = cx && outerRadius && cos && cx + (outerRadius + 10) * cos;
    const sy = cy && outerRadius && sin && cy + (outerRadius + 10) * sin;
    const mx = cx && outerRadius && cos && cx + (outerRadius + 30) * cos;
    const my = cy && outerRadius && sin && cy + (outerRadius + 30) * sin;
    const ex = mx && mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos && cos >= 0 ? "start" : "end";

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius && outerRadius + 6}
          outerRadius={outerRadius && outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex && ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#FF6384"
        >
          <tspan x={ex && ex + (cos >= 0 ? 1 : -1) * 12} dy={8}>
            {payload.value}
          </tspan>
        </text>
        <text
          x={ex && ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#61B9FD"
        >
          <tspan x={ex && ex + (cos >= 0 ? 1 : -1) * 12} dy={24}>
            {payload.name}
          </tspan>
        </text>
        <text
          x={ex && ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#FF6384"
        >
          <tspan x={ex && ex + (cos >= 0 ? 1 : -1) * 12} dy={40}>
            {percent && showPercent && `${(percent * 100).toFixed(2)}%`}
          </tspan>
        </text>
      </g>
    );
  };

  const allIndices = data.map((_, index) => index);

  return (
    <PieChart width={600} height={550} className="static">
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        activeIndex={allIndices}
        activeShape={renderActiveShape}
        legendType="star"
        animationBegin={0}
        animationDuration={animationDuration}
        animationEasing="ease-in-out"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      {visibleLegend && <Legend verticalAlign="bottom" height={36} />}
    </PieChart>
  );
};

export default CustomActiveShapePieChart;
