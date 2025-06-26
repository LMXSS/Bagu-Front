import Navbar from "@/components/common/navbar";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar isAuthenticated />
      <main className="px-10">{children}</main>
    </>
  );
}
