import Image from "next/image";

type SelectorTileType = {
  title: string;
  logoImage: any;
  description: string;
  link: string;
};

const SelectorTile = ({
  title,
  logoImage,
  description,
  link,
}: SelectorTileType) => {
  return (
    <a
      className="pointer place-items-center p-8 flex flex-col shadow-lg rounded-xl border border-slate-100 bg-slate-50 hover:shadow transition m-5 hover:scale-105 hover:bg-white"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="font-bold text-lg">{title}</div>
      <Image
        src={logoImage}
        alt="Google Maps Logo"
        width={100}
        height={90}
        className="py-3"
      />
      {description}
    </a>
  );
};

export default SelectorTile;
