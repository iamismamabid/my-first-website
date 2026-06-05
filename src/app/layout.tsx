import type { Metadata } from "next";
import "../index.css"; // Or wherever your global CSS file is imported
import ThemeToggle from "@/components/ThemeToggle"; // Import the button

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Navigation / Header Area */}
        <header style={{ padding: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
          <ThemeToggle /> {/* <--- Drop it here! */}
        </header>

        {/* This displays your main pages (home, projects, contact) */}
        <main>{children}</main> 
      </body>
    </html>
  );
}
