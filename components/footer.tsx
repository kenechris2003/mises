import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-full">
      <div className="flex flex-col lg:flex-row bg-gray-900 pl-12 pr-10 w-full h-full justify-between items-center lg:items-start pt-9 pb-9 px-4">
        {/* Logo Section */}
        <div className="mb-6 lg:mb-0">
          <Image
            src="/logo_white.png"
            alt="Logo"
            loading="eager"
            className="mt-7 mb-7"
            width={131}
            height={20}
          />
        </div>

        {/* Links Section */}
        <ul className="flex flex-wrap justify-center lg:justify-start gap-3 p-4">
          <li className="p-2 scale-110 transition-all duration-300 hover:scale-100">
            <Link href="https://www.mises.site/developer" className="text-white">
              Developer
            </Link>
          </li>
          <li className="p-2 scale-110 transition-all duration-300 hover:scale-100">
            <Link
              href="https://www.mises.site/static/file/whitepaper.pdf"
              className="text-white"
            >
              Whitepaper
            </Link>
          </li>
          <li className="p-2 scale-110 transition-all duration-300 hover:scale-100">
            <Link href="https://www.mises.site/faqs" className="text-white">
              FAQs
            </Link>
          </li>
          <li className="p-2 scale-110 transition-all duration-300 hover:scale-100">
            <Link href="https://www.mises.site/download" className="text-white">
              Download
            </Link>
          </li>
          <li className="p-2 scale-110 transition-all duration-300 hover:scale-100">
            <Link href="https://www.mises.site/termsofuse" className="text-white">
              Terms of Use
            </Link>
          </li>
          <li className="p-2 scale-110 transition-all duration-300 hover:scale-100">
            <Link href="https://www.mises.site/policy" className="text-white">
              Privacy Policy
            </Link>
          </li>
        </ul>

        {/* Social Media Section */}
        <div className="flex gap-5 justify-center lg:justify-end">
          <Link href={"https://x.com/Mises001"}>
            <Image
              src="/twitter.png"
              alt="twitter"
              loading="eager"
              className="mt-7 mb-7"
              width={34}
              height={34}
            />
          </Link>

          <Link href={"https://github.com/mises-id"}>
            <Image
              src="/github.png"
              alt="github"
              loading="eager"
              className="mt-7 mb-7"
              width={34}
              height={34}
            />
          </Link>

          <Link href={"https://t.me/Misesofficial"}>
            <Image
              src="/telegram.png"
              alt="telegram"
              loading="eager"
              className="mt-7 mb-7"
              width={34}
              height={34}
            />
          </Link>

          <Link href={"https://discord.com/invite/EPYKVD54X8"}>
            <Image
              src="/discord.png"
              alt="discord"
              loading="eager"
              className="mt-7 mb-7"
              width={34}
              height={34}
            />
          </Link>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-700 w-full text-center py-3">
        <p className="text-white text-sm sm:text-base">
          © 2025 MISES NETWORK PTE. LTD.
        </p>
      </div>
    </footer>
  );
}