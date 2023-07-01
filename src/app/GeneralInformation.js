import Image from "next/image";

const GeneralInformation = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 border-t-4 border-t-[#fff] md:border-t-0">
    <div className="h-full w-full flex flex-col items-center justify-center px-10 lg:px-40 py-10 md:py-20 relative">
      <div className="text-center max-w-lg flex flex-col gap-3 items-center justify-center h-full">
        <div className="relative aspect-[20/3] h-[35px] lg:h-[50px]">
          <Image src="/logos/movistar-arena.png" alt="Movistar Arena" fill />
        </div>
        <p className="text-center text-xl md:text-3xl italic">
          ¡Te esperamos este domingo 24 de septiembre a las 6:00 pm en el
          Movistar Arena!
        </p>
        <p className="text-center text-sm md:text-base italic md:absolute md:bottom-0 md:px-10 pb-3">
          Edad mínima 14 Años y apertura de puertas a las 3:00 pm
        </p>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1988.3488410160585!2d-74.07795980357888!3d4.647909247873786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1688169711627!5m2!1ses-419!2sco"
      className="border-0 w-full h-[calc(100vh/3)] md:h-[calc(100vh/2)]"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </section>
);

export default GeneralInformation;
