import Image from "next/image"
import Link from "next/link"

export default function Content(){
    return(
    <div className="flex">
        <div className="mt-60 ml-30 justify-center items-center p-4">
                <p className="text-gray-900 text-6xl font-bold"> 
                    Mises Browser
                </p>
                <p className="text-black text-2xl">
                    Fast & Secure & Extension-loadable
                </p>
                <div className="flex gap-2 mt-4 mb-14">
                    
                        <Link href={"https://apps.apple.com/us/app/mises-browser/id6451129542"}>
                        <div className="flex border border-black rounded-4xl w-fit">
                        
                    <Image src="/Play.png" alt="Logo" loading="eager" className="ml-8 mt-3 mb-3"  width={24} height={12} />
                        
                        <p className="text-black justify-center items-center p-5 pt-3 pb-3 pr-6 pl-3">Andriod</p>
                </div>
                    </Link>
                    <Link href={"https://apps.apple.com/us/app/mises-browser/id6451129542"}>
                    
                    <div className="flex border border-black rounded-4xl w-fit">
                    <Image src="/IOS.png" alt="Logo" loading="eager" className="ml-10 mt-2 mb-3"  width={24} height={12} />
                        <p className="text-black pt-3 pb-3 pl-3 pr-10">IOS</p>
                    </div>
                    </Link>
                </div>
                <div>
                    <p className="text-gray-900 text-6xl font-bold">
                    How to use?
                    </p>
                    <p className="text-black text-2xl">
                    Unsure of where to get started?
                    </p>
                    <p className="text-black text-2xl font-sans">
                    Take a look at the guide to learn how to use Mises Browser.
                    </p>
                <div className="flex gap-2 mt-4 mb-14">
                    <Link href={"https://www.mises.site/guide"}>
                     
                    <div className="flex border border-blue-600 rounded-4xl w-fit ">
                        <p className="text-blue-600 pt-3 pb-3 pl-7 pr-7">Visit Guide</p>
                    </div>
                    </Link>
                    </div>
                </div>
        </div>

        <div>
        <Image src="/phone_img.png" alt="Logo" loading="eager" className=" mt-40 mr-30 p-4" width={650} height={720} />
        </div>

    </div>
    )
}