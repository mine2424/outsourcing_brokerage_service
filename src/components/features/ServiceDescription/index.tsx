import Image from "next/image";
import { FC } from "react";

type ServiceDescriptionListType = {
  title: string;
  description: string;
  image: string;
};

const ServiceDescriptionList: ServiceDescriptionListType[] = [
  // NOTE: 文言、画像は後から変更予定
  {
    title:
      "「トピック・期待する対応」の事前設定が、部下自身のストレスを減らしつつ、本音につながる",
    description:
      "部下によるとても簡単な準備=トピックと上司に期待する対応（アドバイスが欲しい・一緒に考えてほしい・話を聞いてほしい・意見がききたい…）を選ぶだけで、部下のストレスを減らしながらも、部下主体の1on1を生み出します",
    image: "/service_description/can_01_.png",
  },
  {
    title:
      "「トピック・期待する対応」の事前設定が、部下自身のストレスを減らしつつ、本音につながる",
    description:
      "部下によるとても簡単な準備=トピックと上司に期待する対応（アドバイスが欲しい・一緒に考えてほしい・話を聞いてほしい・意見がききたい…）を選ぶだけで、部下のストレスを減らしながらも、部下主体の1on1を生み出します",
    image: "/service_description/can_02_.png",
  },
  {
    title:
      "「トピック・期待する対応」の事前設定が、部下自身のストレスを減らしつつ、本音につながる",
    description:
      "部下によるとても簡単な準備=トピックと上司に期待する対応（アドバイスが欲しい・一緒に考えてほしい・話を聞いてほしい・意見がききたい…）を選ぶだけで、部下のストレスを減らしながらも、部下主体の1on1を生み出します",
    image: "/service_description/can_03_.png",
  },
];

export const ServiceDescription: FC = () => {
  return (
    <div className="text-center">
      <h2 className="mb-6 mt-10 text-3xl">〇〇でできること</h2>
      {ServiceDescriptionList.map(
        (item: ServiceDescriptionListType, index: number) => {
          const isLeft = index === 1;
          return (
            <div className="flex items-center justify-center" key={index}>
              {isLeft && (
                <Image
                  src={item.image}
                  alt={item.image}
                  width={540}
                  height={620}
                />
              )}
              <p className={`${isLeft ? "ml-10" : "mr-10"} w-1/3 text-left`}>
                <span className="text-2xl font-bold leading-[49px]">
                  {item.title}
                </span>
                <br />
                <span className="text-lg">{item.description}</span>
              </p>
              {!isLeft && (
                <Image
                  src={item.image}
                  alt={item.image}
                  width={540}
                  height={620}
                />
              )}
            </div>
          );
        }
      )}
    </div>
  );
};
