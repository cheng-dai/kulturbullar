import { dela } from "@/lib/fonts";
import { SiXiaohongshu } from "react-icons/si";
import { PiInstagramLogoBold } from "react-icons/pi";
export default function Info() {
  return (
    <div className="md:text-2xl flex justify-center items-center gap-10">
      <a
        href="https://www.xiaohongshu.com/user/profile/6559f253000000000202ac8c"
        target="_blank"
      >
        <SiXiaohongshu className="text-4xl" />
      </a>
      <a href="https://www.instagram.com/kulturbullar2024/" target="_blank">
        <PiInstagramLogoBold />
      </a>
    </div>
  );
}
