import { ContactButton } from "@/components/features/ContactButton";
import { NextService } from "@/components/features/NextService";
import { Problem } from "@/components/features/Problem";
import { ServiceDescription } from "@/components/features/ServiceDescription";
import { Layout } from "@/components/layout/Layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="bg-blue-300">
        <div className="mx-auto mb-14 flex h-[450px] max-w-6xl items-center justify-center px-5 text-9xl">
          {/* NOTE: 一言タイトルを後から編集 */}
          一言タイトル
        </div>
      </div>
      <Problem />
      <ServiceDescription />
      <NextService />
      <ContactButton />
    </Layout>
  );
};

export default Home;
