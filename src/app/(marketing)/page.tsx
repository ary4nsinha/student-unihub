import ContentBlock from "@/components/contentBlock";
import H1 from "@/components/h1";

import { SignedOut, SignInButton} from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="flex bg-[#5DC9A8] min-h-screen items-center justify-center flex-col max-w-[1050px] mx-auto px-4 ">
      <ContentBlock className="height-[450px] w-fit flex flex-col lg:flex-row xl:flex-row items-center justify-center gap-10 p-4 py-12">
        <div className="p-2 bg-zinc-200">
          <Image src="/adypu.jpg" alt="logo" height={230} width={230} />
        </div>
        <div className="items-center justify-center space-y-4 text-center">
          <H1 className="text-4xl font-bold">
            ADYPU Student <span className="text-[#5DC9A8]">Unihub</span>
          </H1>
          <blockquote className="mt-2 text-md pl-1 italic">
            &quot;A community effort, to make your college experience, just a
            little easier.&quot;
          </blockquote>
          <div>
            <div>
              <Link href="/app/calculator">
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
      </ContentBlock>
    </div>
  );
}
