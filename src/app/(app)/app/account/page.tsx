import ContentBlock from "@/components/contentBlock";
import { CreatorCard } from "@/components/creatorCard";
import H1 from "@/components/h1";
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";

export default async function Page() {
  return (
    <main className="flex flex-col">
      <H1 className="my-4 text-white text-center sm:text-left">Your Account</H1>

      <ContentBlock className="h-[400px]  flex w flex-col gap-8 justify-center items-center ">
        <div className="flex flex-col gap-4  py-12 items-center justify-center">
          <H1 className=" font-semibold text-3xl">Logged in as</H1>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: " w-24 h-24",
                },
              }}
            />
            <SignOutButton>
              <button>Sign Out</button>
            </SignOutButton>
          </SignedIn>
        </div>
        <div className=" bg-zinc-200/30 border-t border-zinc-900/20 mt-auto p-4 w-full flex items-center justify-center">
          <CreatorCard />
        </div>
      </ContentBlock>
    </main>
  );
}
