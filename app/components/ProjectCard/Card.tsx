import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

export const Card = ({
  src,
  alt,
  title,
  color,
  type = "",
  reveal = true,
  text = "View Project",
}: {
  src: string | StaticImageData;
  alt: string;
  title?: string;
  color?: string;
  type?: string;
  reveal?: boolean;
  text?: string;
}) => {
  return (
    <div
      className="group relative h-full max-h-[400px] w-full overflow-hidden rounded-2xl"
    >
      <div className="h-full w-full text-white duration-400 group-hover:scale-105">
        <span
          className={clsx(
            "absolute inset-0 overflow-hidden rounded-2xl contain-strict transition-opacity duration-400 after:absolute after:inset-0 after:z-4 after:rounded-2xl after:duration-200 after:content-['']",
            reveal ? "hero-card-overlay opacity-100" : "opacity-100"
          )}
          style={
            {
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.3) 14%, transparent 28%)",
            } as React.CSSProperties
          }
        >
          <span className="absolute top-2 left-2 w-fit rounded-full border border-gray-700 bg-black/80 px-4 py-2 text-xs shadow-md backdrop-blur-sm">
            {type}
          </span>
          <span className="absolute bottom-4 left-4 z-5 w-fit text-lg font-medium tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            {title ?? alt.split(" ")[0]}
          </span>
          <span className="absolute right-4 bottom-4 z-5 flex w-fit items-center gap-1 text-xs drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            {/* SVG inlined for performance */}
            <svg
              className="h-4 w-4"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
              />
            </svg>
            {text}
          </span>
        </span>
        <Image
          width={600}
          height={400}
          className="h-full w-full bg-slate-900 object-cover"
          src={src}
          alt={alt}
          priority
          decoding="async"
        />
      </div>
    </div>
  );
};
