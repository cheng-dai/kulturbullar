import Image from "next/image";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import PlayList from "@/components/Playlist";
import Info from "@/components/Info";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-between md:gap-10 px-6">
      <div className="flex flex-col justify-center items-center ">
        <Image src="/logo.jpg" alt="logo" width={100} height={100} />

        <Info />
        <a
          href="https://maps.app.goo.gl/r4K5NoiXCPaLkgkb6?g_st=ic"
          className="underline underline-offset-2"
        >
          <PiMapPinSimpleAreaBold className="inline-block mr-2 text-xl" />
          Skarpskyttestigen 6
        </a>
      </div>

      <PlayList />
    </main>
  );
}
