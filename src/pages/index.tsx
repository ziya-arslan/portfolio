import { Poppins } from "next/font/google";
import { Hero, TechStack, Timeline } from "@sections";

const poppins = Poppins({
  weight: ["400", "500", "600", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <Hero />
      <TechStack />
      <Timeline />
    </div>
  );
}
