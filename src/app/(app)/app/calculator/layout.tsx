import CalcNav from "@/components/calcNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main> {children}</main>;
}
