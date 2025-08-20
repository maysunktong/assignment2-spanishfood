import Logo from "./Logo";

export default function Header({ title }: { title: string }) {
  return (
    <header className="w-full flex justify-center items-center gap-6">
      <Logo />
      <h1 className="text-xl md:text-6xl font-bold text-black">{title}</h1>
    </header>
  );
}
