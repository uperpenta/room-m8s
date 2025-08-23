import Link from "next/link";

export function TopNav({ user }: { user: { name: string } }) {
  return (
    <nav className="flex h-16 items-center justify-between border-white bg-blue-400 px-4 text-white">
      <Link href="/dashboard">Room-M8S</Link>
      <h3>Hi, {user.name}</h3>
    </nav>
  );
}
