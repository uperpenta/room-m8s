import Link from "next/link";
import { SettingsIcon } from "../icons/SettingsIcon";
import HouseIcon from "../icons/HouseIcon";

export function TopNav({ user }: { user?: { name: string } }) {
  if (!user) return null;

  return (
    <nav className="flex h-16 items-center bg-bluey px-4 text-white">
      <Link href="/dashboard" className="mx-2 flex flex-1 items-center gap-2">
        <HouseIcon />
        Room-M8s
      </Link>
      <h3 className="mx-2 flex-col-reverse">Hi, {user.name}</h3>
      <Link href="/dashboard/settings" className="flex-col-reverse gap-2">
        <SettingsIcon></SettingsIcon>
      </Link>
    </nav>
  );
}
