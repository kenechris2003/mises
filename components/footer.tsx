import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
    <footer className=" w-full h-full">
        <div className="flex bg-gray-900 w-full h-full justify-between pt-9 pb-9 mr-30 pl-4">
        <Image src="/logo_white.png" alt="Logo" loading="eager" className="mt-7 mb-7 ml-30" width={131} height={20} />
        <ul className="flex pl-3 pr-4 mt-3 pt-3 pb-3 gap-3 p-4">
                    <li className="p-2 scale-110 transition-all duration-300 hover:scale-100">
                      <Link href="https://www.mises.site/developer" className="text-white">Developer</Link>
                    </li>
                    <li className="p-2 scale-110 transition-all duration-300 hover:scale-100">
                        <Link href="https://www.mises.site/static/file/whitepaper.pdf" className="text-white">Whitepaper</Link>
                    </li>
                    <li className="p-2 scale-110 transition-all duration-300 hover:scale-100">
                      <Link href="https://www.mises.site/faqs" className="text-white">FAQs</Link>
                    </li>
                    <li className="p-2 scale-110 transition-all duration-300 hover:scale-100">
                      <Link href="https://www.mises.site/download" className="text-white">Download</Link>
                    </li>
                    <li className="p-2 scale-110 transition-all duration-300 hover:scale-100">
                      <Link href="https://www.mises.site/termsofuse" className="text-white">Terms of Use</Link>
                    </li>
                    <li className="p-2 scale-110 transition-all duration-300 hover:scale-100">
                      <Link href="https://www.mises.site/policy" className="text-white">Privacy Policy</Link>
                    </li>
        </ul>

        <div className="flex gap-5 mr-30">
          <Link href={"https://x.com/Mises001"}>
              <Image src="/twitter.png" alt="twitter" loading="eager" className=" mt-7 mb-7" width={34} height={34} />
          </Link>

          <Link href={"https://github.com/mises-id"}>
              <Image src="/github.png" alt="github" loading="eager" className=" mt-7 mb-7" width={34} height={34} />
          </Link>

          <Link href={"https://t.me/Misesofficial"}>
              <Image src="/telegram.png" alt="telegram" loading="eager" className="text-gray-700 mt-7 mb-7" width={34} height={34} />
          </Link>

          <Link href={"https://discord.com/invite/EPYKVD54X8"}>
              <Image src="/discord.png" alt="discord" loading="eager" className=" mt-7 mb-7" width={34} height={34} />
          </Link>

        </div>

        </div>
        <div className="bg-gray-700 w-full h-full">
            <p className=" justify-center items-center ml-180 p-3">© 2025 MISES NETWORK PTE. LTD.</p>
        </div>

    </footer>

    )
}