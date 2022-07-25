import { FC } from "react";
import Image from "next/image";

type ProblemListType = {
  title: JSX.Element;
  image: string;
};

const ProblemList: ProblemListType[] = [
  // NOTE: 文言、画像は後から変更予定
  {
    title: (
      <div className="text-[18px] font-bold">
        1on1で本音を
        <br /> 引き出せない
      </div>
    ),
    image: "/problem/solution1.png",
  },
  {
    title: (
      <div className="text-[18px] font-bold">
        上司によって
        <br /> 対応がバラバラ
      </div>
    ),
    image: "/problem/solution2.png",
  },
  {
    title: (
      <div className="text-[18px] font-bold">
        1on1の負担が大きく
        <br />
        継続しない
      </div>
    ),
    image: "/problem/solution3.png",
  },
];

export const Problem: FC = () => {
  return (
    <div className="text-center">
      <h2 className="mb-6 text-3xl">解決できる課題</h2>
      <ul className="flex items-center justify-center gap-4">
        {ProblemList.map((item: ProblemListType, index: number) => {
          return (
            <li className="rounded bg-gray-200 p-3" key={index}>
              {item.title}
              <Image
                src={item.image}
                alt={item.image}
                width={180}
                height={180}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
