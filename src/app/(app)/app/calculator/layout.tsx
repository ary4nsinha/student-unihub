import CalcNav from "@/components/calcNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {" "}
      <CalcNav />
      {children}
    </main>
  );
}
