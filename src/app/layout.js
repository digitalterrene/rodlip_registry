import GlobalContextProvider from "@/context/GlobalContext";
import "./globals.css";
import { Inter } from "next/font/google";
import logo from "@/assets/brand/logo.png";
import { AuthContextProvider } from "@/context/AuthContext";
import Header from "@/components/native/Header";
import Footer from "@/components/native/Footer";
import Sidebarr from "@/components/native/Sidebarr";

const inter = Inter({ subsets: ["latin"] });
const jobCategories = [
  "technology",
  "healthcare",
  "education",
  "finance",
  "marketing",
  "engineering",
  "hospitality",
  "unemployed",
];
const dashboard_routes = [
  {
    route: "technology",
    icon: "https://cdn-icons-png.flaticon.com/128/1829/1829892.png",
  },
  {
    route: "healthcare",
    icon: "https://cdn-icons-png.flaticon.com/128/684/684262.png",
  },
  {
    route: "education",
    icon: "https://cdn-icons-png.flaticon.com/128/686/686051.png",
  },
  {
    route: "finance",
    icon: "https://cdn-icons-png.flaticon.com/128/3065/3065977.png",
  },
  {
    route: "marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/2907/2907972.png",
  },
  {
    route: "engineering",
    icon: "https://cdn-icons-png.flaticon.com/128/2385/2385088.png",
  },
  {
    route: "hospitality",
    icon: "https://cdn-icons-png.flaticon.com/128/5693/5693996.png",
  },
  {
    route: "unemployed",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942800.png",
  },
  {
    route: "baby-boomers",
    icon: "https://cdn-icons-png.flaticon.com/128/3160/3160279.png",
  },
  {
    route: "gen-x",
    icon: "https://cdn-icons-png.flaticon.com/128/4295/4295301.png",
  },
  {
    route: "millennials",
    icon: "https://cdn-icons-png.flaticon.com/128/7363/7363508.png",
  },
  {
    route: "gen-z",
    icon: "https://cdn-icons-png.flaticon.com/128/2990/2990638.png",
  },
  {
    route: "gen-alpha",
    icon: "https://cdn-icons-png.flaticon.com/128/941/941515.png",
  },
];

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
            <div className="bg-white  w-full flex justify-between">
              <Sidebarr tabs={dashboard_routes} logo={logo} />
              <div className="flex flex-col justify-between w-full">
                <>
                  <Header />
                  {/* <SmallHeader /> */}
                  {children}
                </>
                <Footer />
              </div>
            </div>
          </AuthContextProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
