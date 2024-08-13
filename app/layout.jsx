import { Montserrat, Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "URL Shortener",
  description: "Built by Bright, A frontendmentor task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`max-w-7xl mx-auto ${ubuntu.className}`}>
        {children}
      </body>
    </html>
  );
}
