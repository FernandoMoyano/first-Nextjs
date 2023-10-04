import { Navbar } from "../components/Navbar";
import { Poppins, Roboto } from "next/font/google";

export const metadata = {
  title: "Next.js",
  description: "Comercio",
  keywords: "e-commerce, online ",
};
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
