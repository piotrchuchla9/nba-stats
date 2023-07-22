import React from "react";
import { Cell, Legend, Pie, PieChart, Sector } from "recharts";

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];

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
}

interface CustomActiveShapePieChartProps {
  data: Data[];
  activeIndex?: number;
  onPieEnter: (data: Data, index: number) => void;
  onPieLeave: () => void;
}

const CustomActiveShapePieChart: React.FC<CustomActiveShapePieChartProps> = ({
  activeIndex,
  onPieEnter,
  onPieLeave,
  data,
}) => {
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
      fill,
      payload,
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
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
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
          dy={8}
          textAnchor={textAnchor}
          fill="#333"
        >
          {`Wartość ${value}`}
        </text>
        <text
          x={ex && ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={24}
          textAnchor={textAnchor}
          fill="#999"
        >
          {percent && `(Procent ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  return (
    <PieChart width={400} height={400} className="static mt-40 ml-40">
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        onMouseEnter={onPieEnter}
        onMouseLeave={onPieLeave}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  );
};

export default CustomActiveShapePieChart;
