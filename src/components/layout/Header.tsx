import { FC } from "react";
import Image from "next/image";
import { Link as Scroll } from "react-scroll";

const NavLink = [
  {
    text: "Vision",
  },
  {
    text: "Problem",
  },
  {
    text: "Service",
  },
  {
    text: "Contact",
  },
  {
    text: "Next",
  },
];

export const Header: FC = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-300 p-4">
      <Image src="/vercel.svg" alt="/vercel.svg" width={100} height={50} />
      <ul className="flex items-center justify-between">
        {NavLink.map((item, index) => (
          <Scroll
            key={index}
            to={item.text}
            smooth={true}
            className="mr-12 font-bold hover:cursor-pointer"
          >
            <li>{item.text}</li>
          </Scroll>
        ))}
      </ul>
    </nav>
  );
};
