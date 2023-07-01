import CountdownBase, { zeroPad } from "react-countdown";

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex justify-between gap-3 md:gap-5 [&>div]:uppercase [&>div]:flex [&>div]:flex-col [&>div>span]:block text-center mx-auto [&>div>span:first-of-type]:text-xl md:[&>div>span:first-of-type]:text-4xl [&>div>span:first-of-type]:font-black [&>div>span:first-of-type]:text-kick text-textPrimary font-light text-xs md:text-base">
      <div>
        <span>{zeroPad(days)}</span>
        <span>Días</span>
      </div>
      <div>
        <span>{zeroPad(hours)}</span>
        <span>Horas</span>
      </div>
      <div>
        <span>{zeroPad(minutes)}</span>
        <span>Minutos</span>
      </div>
      <div>
        <span>{zeroPad(seconds)}</span>
        <span>Segundos</span>
      </div>
    </div>
  );
};

const Countdown = () => (
  <div className="w-fit mx-auto mt-10 md:mt-20 rounded-t-3xl bg-bgPrimary pt-3 md:pt-5 px-6 md:px-10">
    <CountdownBase
      date={new Date("2023-09-24T15:00:00-0500")}
      renderer={renderer}
    />
  </div>
);

export default Countdown;
