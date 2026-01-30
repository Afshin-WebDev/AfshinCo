import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import { SocialNetworks } from "./footer.types";
import { FaTelegram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import LinksSection from "./LinksSection";
import NewsLetterSection from "./NewsLetterSection";
import LayoutSpacing from "./LayoutSpacing";

const socialsData: SocialNetworks[] = [
  {
    id: 1,
    icon: <FaTwitter />,
    url: "https://x.com",
  },
  {
    id: 2,
    icon: <FaTelegram />,
    url: "https://t.me/@tbwditw",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    url: "https://linkedin.com",
  },
  {
    id: 4,
    icon: <FaGithub />,
    url: "https://github.com/Afshin-WebDev",
  },
];

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="relative">
        <div className="absolute bottom-0 w-full h-1/2 bg-[#F0F0F0]"></div>
        <div className="px-4">
          <NewsLetterSection />
        </div>
      </div>
      <div className="pt-8 md:pt-[50px] bg-[#F0F0F0] px-4 pb-4">
        <div className="max-w-frame mx-auto">
          <nav className="lg:grid lg:grid-cols-12 mb-8">
            <div className="flex flex-col lg:col-span-3 lg:max-w-[248px]">
              <h1
                className={cn([
                  integralCF.className,
                  "text-[28px] lg:text-[32px] mb-6",
                ])}
              >
                AFSHIN.CO
              </h1>
              <p className="text-black/60 text-sm mb-9">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex items-center">
                {socialsData.map((social) => (
                  <Link
                    href={social.url}
                    key={social.id}
                    className="bg-white hover:bg-black hover:text-white transition-all mr-3 w-7 h-7 rounded-full border border-black/20 flex items-center justify-center p-1.5"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden lg:grid col-span-9 lg:grid-cols-4 lg:pl-10">
              <LinksSection />
            </div>
            <div className="grid lg:hidden grid-cols-2 sm:grid-cols-4">
              <LinksSection />
            </div>
          </nav>

          <hr className="h-[1px] border-t-black/10 mb-6" />
          <div className="flex flex-col sm:flex-row justify-center items-center mb-2">
            <p className="text-sm text-center sm:text-left text-black/60 mb-4 sm:mb-0 sm:mr-1">
              Afshin.co © Made by{" "}
              <Link
                href="https://github.com/Afshin-WebDev"
                className="text-black font-medium"
              >
                Afshin Fallahnejad
              </Link>
            </p>
          </div>
        </div>
        <LayoutSpacing />
      </div>
    </footer>
  );
};

export default Footer;
