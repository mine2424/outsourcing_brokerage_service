import { Layout } from "@/components/layout/Layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="bg-blue-300">
        <div className="mx-auto flex h-[450px] max-w-6xl items-center justify-center px-5 text-9xl">
          一言タイトル
        </div>
      </div>
    </Layout>
  );
};

export default Home;
