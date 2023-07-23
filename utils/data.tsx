import { useTranslation } from "react-i18next";

type Data = {
  name: string;
  value: number;
};

const Datas = () => {
  const { t } = useTranslation();

  const russelFinalsApperance: Data[] = [
    { name: "Bill Russel", value: 12 },
    { name: t("slides.allFinals"), value: 73 },
  ];

  const lebronPoints: Data[] = [
    { name: "LeBron James", value: 38652 },
    { name: "Kareem Abdul-Jabbar", value: 38387 },
    { name: "Karl Malone", value: 36928 },
    { name: "Kobe Bryant", value: 33643 },
    { name: "Michael Jordan", value: 32292 },
  ];

  const mostFinals: Data[] = [
    { name: "Los Angeles Lakers", value: 17 },
    { name: "Boston Celtics", value: 17 },
    { name: "Golden State Warriors", value: 7 },
    { name: "Chicago Bulls", value: 6 },
    { name: "San Antonio Spurs", value: 5 },
    { name: t("slides.restOfTheNBA"), value: 21 },
  ];

  const mostPointsPerGame: Data[] = [
    { name: "Michael Jordan", value: 30.1 },
    { name: "Wilt Chamberlain", value: 30.0 },
    { name: "Elgin Baylor", value: 27.4 },
    { name: "Levin Durant", value: 27.3 },
    { name: "Joel Embiid", value: 27.2 },
  ];

  const mostPointsScored: Data[] = [
    { name: "Kobe Bryant", value: 6 },
    { name: "Elgin Baylor", value: 3 },
    { name: "Wilt Chamberlain", value: 32 },
    { name: "Damian Lillard", value: 5 },
    { name: "Michael Jordan", value: 4 },
    { name: "James Harden", value: 4 },
  ];

  const tallestAndSmallest: Data[] = [
    { name: "Manute Bol", value: 231 },
    { name: "Muggsy Bogues", value: 160 },
  ];

  const lastNames: Data[] = [
    { name: "Williams", value: 12 },
    { name: "Jones", value: 5 },
    { name: "Green", value: 3 },
    { name: "Brown", value: 6 },
  ];

  const siblings: Data[] = [
    { name: "Curry", value: 2 },
    { name: "Antetokounmpo", value: 3 },
    { name: "Ball", value: 3 },
    { name: "Holiday", value: 3 },
    { name: "Hernangomez", value: 2 },
    { name: "Lopez", value: 2 },
    { name: "Holiday", value: 2 },
  ];

  return {
    lastNames,
    lebronPoints,
    mostFinals,
    mostPointsPerGame,
    mostPointsScored,
    russelFinalsApperance,
    siblings,
    tallestAndSmallest,
  };
};

export default Datas;