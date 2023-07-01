import Image from "next/image";

const Footer = () => (
  <footer>
    <div className="bg-bgPrimary text-textPrimary py-10 flex flex-col lg:flex-row justify-between items-center px-2 md:px-20">
      <div className="aspect-[20252/12023] h-[100px] relative">
        <Image
          src="/logos/stream-fighters.png"
          alt="Stream Fighters logo"
          fill
        />
      </div>
      <div className="flex gap-10 mt-10 lg:mt-0">
        <div className="h-[18px] md:h-[30px] aspect-[603/200] relative">
          <Image src="/sponsors/kick.png" alt="Kick" fill />
        </div>
        <div className="h-[18px] md:h-[30px] aspect-[1007/500] relative">
          <Image src="/sponsors/stake.png" alt="Stake" fill />
        </div>
        <div className="h-[18px] md:h-[30px] aspect-[109/100] relative">
          <Image src="/sponsors/westcol.png" alt="Westcol" fill />
        </div>
        <div className="h-[18px] md:h-[30px] aspect-[793/250] relative">
          <Image src="/sponsors/spoon.webp" alt="Spoon" fill />
        </div>
      </div>
    </div>
    <div className="w-full bg-[#000] flex justify-center items-center gap-7 py-5">
      <a
        href="https://www.instagram.com/stream_fighters/"
        target="_blank"
        rel="noopener nofollow noreferrer"
        className="relative aspect-square h-[25px] md:h-[30px]"
      >
        <Image src="/social/instagram.svg" alt="Instagram" fill />
      </a>
      <a
        href="https://kick.com/westcol"
        target="_blank"
        rel="noopener nofollow noreferrer"
        className="relative aspect-square h-[17px] md:h-[18px]"
      >
        <Image src="/social/kick.svg" alt="Kick" fill />
      </a>
      <a
        href="https://twitter.com/WestCOL_"
        target="_blank"
        rel="noopener nofollow noreferrer"
        className="relative aspect-square h-[20px] md:h-[25px]"
      >
        <Image src="/social/twitter.svg" alt="Twitter" fill />
      </a>
      <a
        href="https://www.youtube.com/@WestCOL242"
        target="_blank"
        rel="noopener nofollow noreferrer"
        className="relative aspect-square h-[25px] md:h-[30px]"
      >
        <Image src="/social/youtube.svg" alt="Youtube" fill />
      </a>
    </div>
  </footer>
);

export default Footer;
