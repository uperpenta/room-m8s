import Link from "next/link";
import { SettingsIcon } from "../icons/SettingsIcon";

export function TopNav({ user }: { user?: { name: string } }) {
  if (!user) return null;

  return (
    <nav className="flex h-16 items-center border-white bg-blue-400 px-4 text-white">
      <Link href="/dashboard" className="flex-1">
        Room-M8S
      </Link>
      <h3 className="mx-2 flex-col-reverse">Hi, {user.name}</h3>
      <Link href="/dashboard/settings" className="flex-col-reverse">
        <SettingsIcon></SettingsIcon>
      </Link>
    </nav>
  );
}
