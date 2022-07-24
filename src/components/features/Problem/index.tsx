import { FC } from "react";
import Image from "next/image";

export const Problem: FC = () => {
  return (
    <div className="text-center">
      <h2 className="mb-6 text-3xl">解決できる課題</h2>
      <ul className="flex items-center justify-center gap-4">
        <li className="rounded bg-gray-200 p-3">
          <div className="text-[18px] font-bold">
            1on1で本音を
            <br /> 引き出せない
          </div>
          <Image
            src={"/solution1.png"}
            alt={"/solution1.png"}
            width={180}
            height={180}
          />
        </li>
        <li className="rounded bg-gray-200 p-3">
          <div className="text-[18px] font-bold">
            上司によって
            <br /> 対応がバラバラ
          </div>
          <Image
            src={"/solution2.png"}
            alt={"/solution2.png"}
            width={180}
            height={180}
          />
        </li>
        <li className="rounded bg-gray-200 p-3">
          <div className="text-[18px] font-bold">
            1on1の負担が大きく
            <br />
            継続しない
          </div>
          <Image
            src={"/solution3.png"}
            alt={"/solution3.png"}
            width={180}
            height={180}
          />
        </li>
      </ul>
    </div>
  );
};
