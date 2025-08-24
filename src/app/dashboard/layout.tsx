import { auth } from "~/server/auth";
import Footer from "../_components/dashboard/Footer";
import { TopNav } from "../_components/dashboard/TopNav";

async function getUser() {
  const session = await auth();

  return session?.user;
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  if (!user?.name) return <p>You must be logged in to view this page</p>;

  return (
    <>
      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <TopNav user={{ name: user.name }} />

        {/* Content (Sidebar + Main) */}
        <div className="flex flex-1">
          {children}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
