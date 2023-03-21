import hero from "assets/media/images/hero.jpg"

export default function Hero(): JSX.Element {
  return (
    <div className=" relative">
      <img src={hero} alt="" />
    </div>
  );
}