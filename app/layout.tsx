import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "My awesome site",
  description: "Site about me and my work",
};

const Header = () => (
  <header>
    <div className="text-center bg-purple-600 p-2 my-1 rounded-md">
      <Link href="/">
        <h1 className="text-2xl text-white font-bold my-1">My awesome site</h1>
      </Link>
    </div>
  </header>
);

const Footer = () => (
  <footer>
    <div className="border-t border-slate-400 mt-4 py-6 text-center text-slate-400">
      <h3>Awesome site</h3>
    </div>
  </footer>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto flex h-screen items-center max-w-2xl px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
