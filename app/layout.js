import { Navbar } from "../components/Navbar";

export const metadata = {
  title: "Next.js",
  description: "Comercio",
  keywords: "e-commerce, online ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
