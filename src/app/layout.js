import profileImage from "../../public/profile.svg";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Jokeville",
  description: "Have you smiled today?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white">
        <nav className="flex justify-between p-3 px-6 items-center bg-zinc-800 shadow-lg">
          <h1 className="text-4xl inline h-min carter-one">Jokeville</h1>
          <Link href="/profile">
            <div className="inline items-center cursor-pointer">
              <Image
                className="m-auto bg-white rounded-full"
                src={profileImage}
                alt="You Profile"
                width={35}
                height={35}
              />
              <span className="text-white">Profile</span>
            </div>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
