import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext"; // Adjust the path if necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HeyLearn2Code-LMS",
  description: "Learning management system for coding bootcamp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
