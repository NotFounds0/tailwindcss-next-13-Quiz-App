import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center py-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-white text-2xl">Welcome Quiz App</h1>
          <p className="text-white w-[380px] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            corrupti velit aliquid eius,
          </p>
          <Link href={'/quiz'} className="bg-green-500 py-1 w-[80px] rounded-md hover:bg-green-700">Start</Link>
        </div>
      </div>
    </>
  );
}
