import Logo from "./Logo";

export default function Header({ title }: { title: string }) {
  return (
    <header>
      <Logo />
      <h1>{title}</h1>
    </header>
  );
}
