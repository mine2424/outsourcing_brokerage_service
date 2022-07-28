import { Button } from "@mantine/core";
import { FC } from "react";

type ContactButtonListType = {
  title: string;
  buttonText: string;
  href: string;
};

const ContactButtonList: ContactButtonListType[] = [
  // NOTE: 文言は後で変更する
  {
    title: "すぐにサービスをご利用したい方はこちらから",
    buttonText: "いきなり追加",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfqlvTwvgMv9kpdZQHTLIpuuOP5KzsW32Cblm_1kWdzEUhc2w/viewform?usp=sf_link",
  },
  {
    title: "一度ご相談してみたい方はこちらから",
    buttonText: "相談する",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeVpVYUu92g0DltZ6F1QyUp3QjG5uc4ux4XJXx6ox6jE2c2Qg/viewform?usp=sf_link",
  },
];

export const ContactButton: FC = () => {
  const handleClick = (href: string) => window.open(href, "_ blank");

  return (
    <div className="mt-16 bg-gray-100 py-14 text-center">
      <h2 className="mb-10 text-3xl">お問い合わせ</h2>
      <div className="flex items-center justify-center gap-20">
        {ContactButtonList.map((item: ContactButtonListType, index: number) => (
          <div
            key={index}
            className="flex w-[416px] flex-col items-center justify-center gap-7 rounded bg-blue-300 py-10"
          >
            <div className="text-lg font-bold">{item.title}</div>
            <Button size="lg" onClick={() => handleClick(item.href)}>
              {item.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
