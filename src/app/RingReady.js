import Image from "next/image";

const RingReady = () => (
  <section className="px-4 md:p-0 flex flex-col-reverse md:grid md:grid-cols-2 items-center justify-center w-full">
    <div className="md:bg-[#fff] w-full flex flex-col items-center justify-center px-10 lg:px-40 py-10 md:py-20 h-[calc(100vh/1.7)]">
      <video
        controls
        muted
        autoPlay
        loop
        className="aspect-[9/16] h-full rounded-3xl object-cover"
      >
        <source src="/fights/be_vs_daren.mp4" />
      </video>
    </div>
    <div className="h-full w-full flex flex-col items-center justify-center px-10 lg:px-40 py-10 md:py-20">
      <div className="text-center max-w-lg flex flex-col gap-3 items-center justify-center h-full">
        <Image
          src="/icons/boxing.png"
          height={70}
          width={120}
          alt="Boxing icon"
        />
        <p className="text-center text-xl md:text-3xl italic">
          ¡El ring está listo y los luchadores están preparados para entrar en
          acción! ¡No te quedes fuera de la pelea!
        </p>
      </div>
    </div>
  </section>
);

export default RingReady;
