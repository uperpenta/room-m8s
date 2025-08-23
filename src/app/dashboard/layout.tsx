import Footer from "../_components/dashboard/Footer";
import { TopNav } from "../_components/dashboard/TopNav";

async function getUser() {
  return { name: "John Doe" }; //add user logic to prefetch data : await auth()
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <TopNav user={user} />
        <div className="flex-1 p-6">
          <main>{children}</main>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
