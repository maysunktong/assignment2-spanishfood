import Logo from "./Logo";

export default function Header({ title }: { title: string }) {
  return (
    <header className="w-full flex justify-center items-center gap-6">
      <Logo />
      <h1 className="text-4xl font-bold text-red-800">{title}</h1>
    </header>
  );
}
