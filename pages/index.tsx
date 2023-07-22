import PieChart from "@/components/pie-chart";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const DynamicPieChart = dynamic(() => import("@/components/pie-chart"), {
  ssr: false, // Ważne: Ustawienie ssr na false wyłączy renderowanie na serwerze, co spowoduje, że komponent zrenderuje się tylko po stronie klienta.
});

type Data = {
  name: string;
  value: number;
};

const data: Data[] = [
  { name: "A", value: 30 },
  { name: "B", value: 25 },
  { name: "C", value: 15 },
  { name: "D", value: 30 },
];

export default function Index() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | undefined>();

  const handlePieEnter = (data: Data, index: number) => {
    setActiveIndex(index);
  };

  const handlePieLeave = () => {
    setActiveIndex(undefined);
  };

  return (
    <>
      <div>
        <DynamicPieChart
          activeIndex={activeIndex}
          onPieEnter={handlePieEnter}
          onPieLeave={handlePieLeave}
          data={data}
        />
      </div>
    </>
  );
}
