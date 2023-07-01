import Image from "next/image";

const Fights = () => (
  <section className="bg-bgPrimary py-8 md:py-16 text-textPrimary text-center">
    <div className="flex flex-wrap gap-3 md:gap-5 w-full justify-center px-8">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={`fight-${index + 1}`}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl w-full sm:w-[calc(100%/3)] lg:w-[calc(100%/6)] shadow-2xl"
        >
          <Image
            src={`/fights/pelea-${index + 1}.jpg`}
            alt={`Pelea ${index + 1}`}
            style={{ objectFit: "contain" }}
            fill
            priority
          />
        </div>
      ))}
    </div>
  </section>
);

export default Fights;
