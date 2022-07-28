import Image from "next/image";
import { FC } from "react";

type NextServiceListType = {
  title: string;
  description: string;
  image: string;
};

const NextServiceList: NextServiceListType[] = [
  // NOTE: 文言、画像は後から変更予定
  {
    title: "実装予定 1",
    description:
      "ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。",
    image: "/next_service/undraw_react_re_g3ui.svg",
  },
  {
    title: "実装予定 2",
    description:
      "ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。",
    image: "/next_service/undraw_online_test_re_kyfx.svg",
  },
  {
    title: "実装予定 3",
    description:
      "ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。ここに実装予定の機能を追加します。",
    image: "/next_service/undraw_join_re_w1lh.svg",
  },
];

export const NextService: FC = () => {
  return (
    <div className="text-center">
      <h2 className="mb-6 mt-10 text-3xl">今後追加予定の機能</h2>
      {NextServiceList.map((item: NextServiceListType, index: number) => {
        return (
          <div
            className="flex flex-col items-center justify-center gap-10"
            key={index}
          >
            <p className="w-2/4 text-left">
              <span className="text-2xl font-bold leading-[49px]">
                {item.title}
              </span>
              <br />
              <span className="text-lg">{item.description}</span>
            </p>
            <div className="relative h-[300px] w-[300px]">
              <Image
                src={item.image}
                alt={item.image}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
