import { Inter } from "next/font/google";
import { Hero, TechStack, Timeline } from "@sections";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero />
      <TechStack />
      <Timeline />
    </div>
  );
}
