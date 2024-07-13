import ContentBlock from "@/components/contentBlock";
import H1 from "@/components/h1";
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";

export default async function Page() {
  return (
    <main>
      <H1 className="my-8 text-white">Your Account</H1>

      <ContentBlock className="h-[500px] flex flex-col gap-3 justify-center items-center ">
        <p>Logged in as...</p>
        <SignedIn>
          <SignOutButton>
            <UserButton showName />
          </SignOutButton>
        </SignedIn>
      </ContentBlock>
    </main>
  );
}

