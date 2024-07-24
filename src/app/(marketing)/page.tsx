import { Inter } from "next/font/google";
import Image from "next/image";
import dynamic from "next/dynamic";
import H1 from "@/components/h1";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const DynamicContentBlock = dynamic(() => import("@/components/contentBlock"));

export default function Page() {
  return (
    <div
      className={`flex bg-[#2C9676] min-h-screen items-center justify-center flex-col max-w-[1050px] mx-auto px-4 ${inter.className}`}
    >
      <DynamicContentBlock className="height-[450px] w-fit flex flex-col lg:flex-row xl:flex-row items-center justify-center gap-10 p-4 py-12">
        <div className="p-2">
          <Image priority width={230} height={230} src="/logo.svg" alt="logo" />
        </div>
        <div className="items-center justify-center space-y-4 text-center">
          <H1 className="text-4xl font-bold">
            ADYPU Grade<span className="text-[#2C9676]">Calc</span>
          </H1>
          <blockquote className="mt-2 text-md pl-1 italic">
            &quot;A community effort, to make your college experience, just a
            little easier.&quot;
          </blockquote>
          <div>
            <div>
              <Link href="/app/calculator/sgpa">
                <SignedOut>
                  <SignInButton>
                    <button className="bg-zinc-900 text-white p-3 rounded-md">
                      Get Started
                    </button>
                  </SignInButton>
                </SignedOut>
              </Link>
            </div>
          </div>
        </div>
      </DynamicContentBlock>
    </div>
  );
}
