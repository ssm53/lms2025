// import { Inter } from "next/font/google";
import { Nunito } from "next/font/google"; // Import Nunito font
import "./globals.css";
import { AuthProvider } from "./context/AuthContext"; // Adjust the path if necessary

// const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] }); // Initialize Nunito font

export const metadata = {
  title: "Zez Academy -LMS",
  description: "Learning management system for coding bootcamp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
