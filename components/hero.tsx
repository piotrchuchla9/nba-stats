interface HeroInterface {
  text: string;
  desc: string;
}

export default function Hero(props: HeroInterface) {
  const { text, desc } = props;
  return (
    <div className="h-28">
      <p className="font-semibold text-4xl uppercase w-1/2">{text}</p>
      <p className="mt-4 w-3/4">{desc}</p>
    </div>
  );
}
