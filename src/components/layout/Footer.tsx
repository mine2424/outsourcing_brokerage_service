import { FC } from "react";

type FooterLinkListType = {
  text: string;
  href: string;
};

const FooterLinkList: FooterLinkListType[] = [
  // NOTE: 文言と外部リンクは後で変更する
  {
    text: "運営会社",
    href: "#",
  },
  {
    text: "個人情報利用規約",
    href: "#",
  },
];

export const Footer: FC = () => {
  return (
    <div className="mt-6 flex flex-col items-center justify-between bg-blue-300 py-16 font-medium">
      {/* NOTE: 後で変更する */}
      <div>Copyright 2022 西峰, Inc. All Rights Reserved.</div>
      <ul className="mt-4 flex items-center justify-between gap-5">
        {FooterLinkList.map((item: FooterLinkListType, index: number) => (
          <a key={index} href={item.href}>
            <li>{item.text}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};
