"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [communityDropdown, setCommunityDropdown] = useState(false);
  const [telegramDropdown, setTelegramDropdown] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 border-b-2 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          loading="eager"
          className="ml-4 sm:ml-8"
          width={120}
          height={120}
        />

        <div className="hidden lg:block">
          <ul className="flex space-x-6 lg:space-x-12">
            <li>
              <Link
                href="https://www.mises.site/static/file/whitepaper.pdf"
                className="text-black hover:text-gray-700"
              >
                Whitepaper
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <div className="flex items-center cursor-pointer">
                <Link href="" className="text-black hover:text-gray-700">
                  About Mises
                </Link>
                <span
                  className={`ml-2 transform transition-transform ${
                    aboutDropdown ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              {aboutDropdown && (
                <ul className="absolute top-full left-0 pl-3 pr-4 rounded-lg pt-3 pb-3 bg-white shadow-md border mt-2 w-40">
                  <li className="p-2 hover:bg-gray-100">
                    <Link
                      href="https://www.mises.site/introduction"
                      className="text-black"
                    >
                      Introduction
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <Link
                      href="https://www.mises.site/guide"
                      className="text-black"
                    >
                      Guide
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <Link
                      href="https://www.mises.site/faqs"
                      className="text-black"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <Link
                      href="https://www.mises.site/developer"
                      className="text-black"
                    >
                      Developer
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <Link
                      href="https://drive.google.com/drive/folders/16A2McDRB1L3HDHiGJQb3D4KqOfxEn2Cd?usp=sharing"
                      className="text-black"
                    >
                      Brand Assets
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => setCommunityDropdown(true)}
              onMouseLeave={() => setCommunityDropdown(false)}
            >
              <div className="flex items-center cursor-pointer">
                <Link href="/" className="text-black hover:text-gray-700">
                  Community
                </Link>
                <span
                  className={`ml-2 transform transition-transform ${
                    communityDropdown ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
              {communityDropdown && (
                <ul className="absolute top-full left-0 rounded-lg pl-3 pr-4 bg-white shadow-md pt-3 pb-3 border mt-2 w-40">
                  <li className="p-2 hover:bg-gray-100">
                    <Link
                      href="https://discord.gg/EPYKVD54X8"
                      className="text-black"
                    >
                      Discord
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100">
                    <Link
                      href="https://twitter.com/Mises001"
                      className="text-black"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li
                    className="p-2 hover:bg-gray-100 relative"
                    onMouseEnter={() => setTelegramDropdown(true)}
                    onMouseLeave={() => setTelegramDropdown(false)}
                  >
                    <div className="flex items-center cursor-pointer">
                      <Link href="" className="text-black hover:text-gray-700">
                        Telegram
                      </Link>
                      <span
                        className={`ml-2 transform transition-transform ${
                          telegramDropdown ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </div>
                    {telegramDropdown && (
                      <ul className="absolute top-full -left-3 rounded-lg pl-3 pr-4 bg-white shadow-md mt-3 pt-3 pb-3 border w-40">
                        <li className="p-2 hover:bg-gray-100">
                          <Link
                            href="/community/forum"
                            className="text-black"
                          >
                            Forum
                          </Link>
                        </li>
                        <li className="p-2 hover:bg-gray-100">
                          <Link
                            href="/community/events"
                            className="text-black"
                          >
                            Events
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScYQNvhSYNgoyvMJsT-j_TDxiqLn9BLtkXRFSfxc5z8fikWeA/viewform?usp=sf_link"
                className="text-black hover:text-gray-700"
              >
                Advertisement
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button className="text-black">Menu</button>
        </div>
      </div>
    </header>
  );
}