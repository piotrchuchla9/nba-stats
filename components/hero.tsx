interface HeroInterface {
  text: string;
  desc: string;
}

export default function Hero(props: HeroInterface) {
  const { text, desc } = props;
  return (
    <div className="h-28 w-3/5">
      <p className="font-semibold text-4xl uppercase">{text}</p>
      <p className="mt-4">{desc}</p>
    </div>
  );
}
