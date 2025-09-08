import Link from "next/link";
import Image from "next/image";
import { LAYOUT_CONSTANTS } from "@/constants/layout";

export const Header = () => {
  return (
    <header className="border-b sticky top-0 bg-white/80 backdrop-blur-sm z-50">
      <div
        className={`${LAYOUT_CONSTANTS.CONTAINER.maxWidth} mx-auto ${LAYOUT_CONSTANTS.CONTAINER.padding} h-16 flex items-center justify-between`}
      >
        <Link href="/" className="text-lg font-medium">
          <Image
            src="/LogoTipos.svg"
            alt={LAYOUT_CONSTANTS.LOGO.alt}
            width={LAYOUT_CONSTANTS.LOGO.width}
            height={LAYOUT_CONSTANTS.LOGO.height}
            priority
          />
        </Link>
      </div>
    </header>
  );
};
