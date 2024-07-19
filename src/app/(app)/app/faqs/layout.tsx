import CalcNav from "@/components/calcNav";
import FaqNav from "@/components/faqNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {" "}
      <FaqNav />
      {children}
    </main>
  );
}
