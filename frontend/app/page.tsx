import Hero from "@/components/landing/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans bg-dark-background">
      <main className="flex flex-1 w-full  flex-col items-center justify-between px-16 bg-white dark:bg-dark-background sm:items-start">
        <Hero / >
      </main>
    </div>
  );
}
