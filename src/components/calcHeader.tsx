export default function CalcHeader() {
  return (
    <section className="grid grid-cols-8 gap-8 text-center border-b-2 border-zinc-900/20 items-center rounded-md bg-[#2C9676]">
      <h1 className="header">Subject</h1>
      <h1 className="header">Credits</h1>
      <h1 className="header">CA-I</h1>
      <h1 className="header">CA-II</h1>
      <h1 className="header">Mid Sem</h1>
      <h1 className="header">End Sem</h1>
      <h1 className="header">Total</h1>
      <h1 className="header">Grade</h1>
    </section>
  );
}
