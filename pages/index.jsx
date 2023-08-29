import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center py-10 items-center">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-white md:text-2xl text-sm w-[250px] md:w-full">
            Merhaba online quix uygulamasına hoşgeldin
          </h1>
          <p className="text-white md:w-[380px] text-sm">
            Burada kendini test edip bildiklerini pekiştirebilirsin başarılar
            dileriz
          </p>
          <div className="flex gap-5">
            <label className="flex flex-col gap-2">
              <h1 className="text-white font-bold tracking-wider">
                Seviye Seç
              </h1>
              <select
                name=""
                id=""
                className="outline-none bg-[#2d554e] p-1 text-white"
              >
                <option value="zor">Zor</option>
                <option value="orta">Orta</option>
                <option value="normal">Normal</option>
                <option value="kolay">Kolay</option>
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <h1 className="text-white font-bold tracking-wider">
                İçerik Seç
              </h1>
              <select
                name=""
                id=""
                className="outline-none bg-[#2d554e] p-1 text-white"
              >
                <option value="js">JS</option>
                <option value="react">React</option>
                <option value="next">NextJS</option>
                <option value="node">NodeJS</option>
                <option value="random">Random</option>
              </select>
            </label>
          </div>
          <Link
            href={"/quiz"}
            className="bg-green-600 py-1 w-[80px] rounded-md hover:bg-green-700"
          >
            Başla
          </Link>
        </div>
      </div>
    </>
  );
}
