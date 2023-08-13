import { IconArrowBackUp } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Datas from "../utils/data";

interface CustomArrowProps {
  onClick?: () => void;
}

const DynamicPieChart = dynamic(() => import("@/components/pie-chart"), {
  ssr: false,
});

export default function StatSlider() {
  const { t } = useTranslation();

  const {
    russelFinalsApperance,
    lebronPoints,
    mostFinals,
    mostPointsPerGame,
    mostPointsScored,
    tallestAndSmallest,
    lastNames,
    siblings,
  } = Datas();

  const CustomPrevArrow = ({ onClick }: CustomArrowProps) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-transparent text-gray-500 hover:text-blue-400 transition-all"
    >
      <IconArrowBackUp />
    </button>
  );

  const CustomNextArrow = ({ onClick }: CustomArrowProps) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-transparent text-gray-500 hover:text-blue-400 transition-all"
    >
      <div className="transform -scale-x-100">
        <IconArrowBackUp />
      </div>
    </button>
  );

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <h3 className="text-center font-semibold text-2xl">
          {t("slides.lebron")}
        </h3>
        <div className="flex justify-center">
          <div className="w-full h-[550px] flex justify-center p-10 relative">
            <Image
              src={"/images/lebron.png"}
              alt="LeBron James"
              fill={true}
              className="pt-0 md:pt-10"
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <div className="justify-center hidden md:flex">
            <DynamicPieChart
              data={lebronPoints}
              showPercent={true}
              showValue={true}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center font-semibold text-2xl">
          {t("slides.billRussel")}
        </h3>
        <div className="flex justify-center">
          <div className="w-full h-[550px] flex justify-center p-10 relative">
            <Image
              src={"/images/billrussel.png"}
              alt="Bill Russel"
              fill={true}
              className="pt-0 md:pt-10"
              objectFit="contain"
            />
          </div>
          <div className="justify-center hidden md:flex">
            <DynamicPieChart data={russelFinalsApperance} />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center font-semibold text-2xl">
          {t("slides.mostFinals")}
        </h3>
        <div className="flex justify-center">
          <div className="w-full h-[550px] flex justify-center p-10 relative">
            <Image
              src={"/images/finals.png"}
              alt="Bill Russel"
              fill={true}
              className="pt-0 md:pt-10"
              objectFit="contain"
            />
          </div>
          <div className="justify-center hidden md:flex">
            <DynamicPieChart
              data={mostFinals}
              showPercent={true}
              showValue={true}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center font-semibold text-2xl">
          {t("slides.mostPointsPerGame")}
        </h3>
        <div className="flex justify-center">
          <div className="w-full h-[550px] flex justify-center p-10 relative">
            <Image
              src={"/images/jordan.png"}
              alt="Michael Jordan"
              fill={true}
              className="pt-0 md:pt-10"
              objectFit="contain"
            />
          </div>
          <div className="justify-center hidden md:flex">
            <DynamicPieChart
              data={mostPointsPerGame}
              showPercent={false}
              showValue={true}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center font-semibold text-2xl">
          {t("slides.mostPointsScored")}
        </h3>
        <div className="flex justify-center">
          <div className="w-full h-[550px] flex justify-center p-10 relative">
            <Image
              src={"/images/wilt.png"}
              alt="Wilt Chamberlain"
              fill={true}
              className="pt-0 md:pt-10"
              objectFit="contain"
            />
          </div>
          <div className="justify-center hidden md:flex">
            <DynamicPieChart
              data={mostPointsScored}
              showPercent={true}
              showValue={true}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center font-semibold text-2xl">
          {t("slides.tallest")}
        </h3>
        <div className="flex justify-center">
          <div className="w-full h-[550px] flex justify-center p-10 relative">
            <Image
              src={"/images/bolmuggsy.png"}
              alt="Manute Bol Muggsy Bogues"
              fill={true}
              className="pt-0 md:pt-10"
              objectFit="contain"
            />
          </div>
          <div className="justify-center hidden md:flex">
            <DynamicPieChart
              data={tallestAndSmallest}
              showPercent={false}
              showValue={true}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center font-semibold text-2xl">
          {t("slides.lastNames")}
        </h3>
        <div className="flex justify-center">
          <div className="w-full h-[550px] flex justify-center p-10 relative">
            <Image
              src={"/images/williams.png"}
              alt="Deron Williams"
              fill={true}
              className="pt-0 md:pt-10"
              objectFit="contain"
            />
          </div>
          <div className="justify-center hidden md:flex">
            <DynamicPieChart
              data={lastNames}
              showPercent={false}
              showValue={true}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center font-semibold text-2xl">
          {t("slides.siblings")}
        </h3>
        <div className="flex justify-center">
          <div className="w-full h-[550px] flex justify-center p-10 relative">
            <Image
              src={"/images/ante.png"}
              alt="Antetokounmpo"
              fill={true}
              className="pt-0 md:pt-10"
              objectFit="contain"
            />
          </div>
          <div className="justify-center hidden md:flex">
            <DynamicPieChart
              data={siblings}
              showPercent={false}
              showValue={true}
            />
          </div>
        </div>
      </div>
    </Slider>
  );
}
