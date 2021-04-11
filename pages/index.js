import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-md text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Start</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="https://tse2.mm.bing.net/th?id=OIP.aFwXPSHCUs5g4Qh8ZOUH5gHaHa&pid=Api&P=0&w=300&h=300" />
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="pic"
          height={100}
          width={300}
        />
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md 
          rounded-full border border-gray-200 px-5 py-5 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5" />
        </div>

        <div>
          <button className="btn">Google Search</button>

          <button className="btn">Coding Nextjs</button>
        </div>
      </form>

      <footer>{/* shit */}</footer>
    </div>
  );
}
