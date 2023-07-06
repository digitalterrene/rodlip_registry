import GlobalContextProvider from "@/context/GlobalContext";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "@/context/AuthContext";
import MT_Sidebar from "@/components/Sidebar";
import Header from "@/components/native/Header";
import Footer from "@/components/native/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rodlip Registry",
  description: "Authenticating entities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <GlobalContextProvider>
          <AuthContextProvider>
            <div className="bg-[#D7C9BC] pt-3">
              <MT_Sidebar />
              <div className="w-full ">
                <Header />
                <div className="w-full overflow-y-auto">{children}</div>
                <Footer />
              </div>
            </div>
          </AuthContextProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
