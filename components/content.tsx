import Image from "next/image";
import Link from "next/link";

export default function Content() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-4">
      {/* Left Section */}
      <div className="mt-10 lg:mt-60 lg:ml-30 flex flex-col items-center lg:items-start text-center lg:text-left">
        <p className="text-gray-900 text-4xl sm:text-5xl lg:text-6xl font-bold">
          Mises Browser
        </p>
        <p className="text-black text-lg sm:text-xl lg:text-2xl mt-4">
          Fast & Secure & Extension-loadable
        </p>
        <div className="flex gap-2 mt-4 mb-14">
          <Link href={"https://apps.apple.com/us/app/mises-browser/id6451129542"}>
            <div className="flex border border-black rounded-4xl w-fit">
              <Image
                src="/Play.png"
                alt="Logo"
                loading="eager"
                className="ml-8 mt-3 mb-3"
                width={24}
                height={12}
              />
              <p className="text-black justify-center items-center p-5 pt-3 pb-3 pr-6 pl-3">
                Android
              </p>
            </div>
          </Link>
          <Link href={"https://apps.apple.com/us/app/mises-browser/id6451129542"}>
            <div className="flex border border-black rounded-4xl w-fit">
              <Image
                src="/IOS.png"
                alt="Logo"
                loading="eager"
                className="ml-10 mt-2 mb-3"
                width={24}
                height={12}
              />
              <p className="text-black pt-3 pb-3 pl-3 pr-10">iOS</p>
            </div>
          </Link>
        </div>
        <div>
          <p className="text-gray-900 text-3xl sm:text-4xl lg:text-6xl font-bold">
            How to use?
          </p>
          <p className="text-black text-base sm:text-lg lg:text-2xl mt-2">
            Unsure of where to get started?
          </p>
          <p className="text-black text-base sm:text-lg lg:text-2xl font-sans mt-2">
            Take a look at the guide to learn how to use Mises Browser.
          </p>
          <div className="flex gap-2 mt-4 mb-14">
            <Link href={"https://www.mises.site/guide"}>
              <div className="flex border border-blue-600 rounded-4xl w-fit">
                <p className="text-blue-600 pt-3 pb-3 pl-7 pr-7">Visit Guide</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-10 lg:mt-40">
        <Image
          src="/phone_img.png"
          alt="Logo"
          loading="eager"
          className="p-4"
          width={650}
          height={720}
        />
      </div>
    </div>
  );
}