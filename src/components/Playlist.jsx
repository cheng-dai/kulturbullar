import { PiSpotifyLogo } from "react-icons/pi";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Playlist() {
  const playlist = [
    { song: "太阳在左 月亮在右", singer: "刘成德" },
    { song: "My Jinji", singer: "落日飞车" },
    { song: "海浪", singer: "Deca Joins" },
    { song: "天空之城", singer: "李志" },
    { song: "巫堵", singer: "Deca Joins" },
    { song: "Monday", singer: "窦靖童" },
    { song: "From the start", singer: "Laufey" },
    { song: "Valentine", singer: "Laufey" },
    { song: "在劫难逃", singer: "老狼" },
    { song: "呼吸决定", singer: "Fine 乐团" },
    { song: "I heard love is blind", singer: "Amy Winehouse" },
    { song: "I know you know I love you", singer: "落日飞车" },
    { song: "Average", singer: "我是机车少女" },
    { song: "灵感", singer: "陈绮贞" },
    { song: "天天想你", singer: "陈绮贞" },
    { song: "朋友之歌", singer: "雀斑" },
    { song: "阳光中的向日葵", singer: "" },
    { song: "米店", singer: "李志" },
    { song: "程艾影", singer: "赵雷" },
    { song: "鸽子", singer: "宋冬野" },
    { song: "你离开了林雪平", singer: "原创" },
    { song: "回到中学的暑假", singer: "My Little Airport" },
    { song: "床", singer: "草东没有派对" },
    { song: "路口", singer: "陈升" },
    { song: "Wish you were here", singer: "Pink Floyd" },
    { song: "南方", singer: "达达乐队" },
    { song: "保留", singer: "郭顶" },
    { song: "唱情歌", singer: "余佳运" },
    { song: "莉莉安", singer: "徐佳莹" },
    { song: "玫瑰色的你", singer: "张悬" },
    { song: "喜欢", singer: "张悬" },
    { song: "休息", singer: "" },
    { song: "静止", singer: "花儿乐队" },
    { song: "Yellow", singer: "Coldplay" },
    { song: "一万次悲伤", singer: "逃跑计划" },
    { song: "南方姑娘", singer: "赵雷" },
    { song: "虎口脱险", singer: "老狼" },
    { song: "奇迹", singer: "大飞" },
    { song: "再见杰克", singer: "痛仰" },
    { song: "采石", singer: "万能青年旅店" },
    { song: "泥河", singer: "万能青年旅店" },
    { song: "秦皇岛", singer: "万能青年旅店" },
    { song: "妈妈 一起摇滚吧", singer: "舌头" },
    { song: "Hey Jude", singer: "The Beatles" },
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-card text-card-foreground rounded-lg shadow-lg ">
      <div className="p-6  text-[#456E3E]">
        <h2 className="text-2xl font-bold flex items-center">歌单</h2>
      </div>
      <ScrollArea className="h-[330px]">
        <ul className="divide-y divide-border">
          {playlist.map((song, index) => (
            <li
              key={index}
              className="flex items-center p-4 hover:bg-accent transition-colors"
            >
              <span className="text-muted-foreground mr-4">{index + 1}</span>
              <div className="flex-grow">
                <h3 className="font-medium">{song.song}</h3>
                <p className="text-sm text-muted-foreground">{song.singer}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
      <div className="p-4">
        <a
          className={`${buttonVariants({
            variant: "link",
          })} bg-[#1DB954] w-full text-white`}
          href="https://open.spotify.com/playlist/5ubigEtL21vYaoh1akB7BP?si=iQF0H76fRIWMuKc6pdgl6Q"
          target="_blank"
        >
          <PiSpotifyLogo className="mr-2 text-2xl" />
          Spotify 歌单
        </a>
      </div>
    </div>
  );
}
