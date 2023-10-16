import GlobalContextProvider from "@/context/GlobalContext";
import "./globals.css";
import { Inter } from "next/font/google";
import logo from "@/assets/brand/logo.png";
import { AuthContextProvider } from "@/context/AuthContext";
import Header from "@/components/native/Header";
import Footer from "@/components/native/Footer";
import Sidebarr from "@/components/native/Sidebarr";

const inter = Inter({ subsets: ["latin"] });

const dashboard_routes = [
  {
    route: "fenac",
    link: "/federal_ecopolitical_noble_assembly_committee",
    icon: "https://cdn-icons-png.flaticon.com/128/2947/2947660.png",
  },

  {
    route: "ecea",
    link: "/employment_consumption_equating_agency",
    icon: "https://cdn-icons-png.flaticon.com/128/11526/11526969.png",
  },
  {
    route: "mera",
    link: "/morality_enforcement_and_retaintion_body",
    icon: "https://cdn-icons-png.flaticon.com/128/2702/2702134.png",
  },
  {
    route: "scara",
    link: "/specialized_companies_active_registering_agency",
    icon: "https://cdn-icons-png.flaticon.com/128/4399/4399641.png",
  },
  {
    route: "pl",
    link: "/perrenial_legacy",
    icon: "https://cdn-icons-png.flaticon.com/128/5354/5354747.png",
  },
  {
    route: "north america",
    link: "/north_america",
    icon: "https://cdn-icons-png.flaticon.com/128/82/82332.png",
  },
  {
    route: "south america",
    link: "/south_america",
    icon: "https://cdn-icons-png.flaticon.com/128/82/82416.png",
  },
  {
    route: "europe",
    link: "/europe",
    icon: "https://cdn-icons-png.flaticon.com/128/1727/1727118.png",
  },
  {
    route: "africa",
    link: "/africa",
    icon: "https://cdn-icons-png.flaticon.com/128/2802/2802689.png",
  },
  {
    route: "australia",
    link: "/australia",
    icon: "https://cdn-icons-png.flaticon.com/128/921/921429.png",
  },
  {
    route: "asia",
    link: "/asia",
    icon: "https://cdn-icons-png.flaticon.com/128/4746/4746049.png",
  },
  {
    route: "antarctica",
    link: "/antarctica",
    icon: "https://cdn-icons-png.flaticon.com/128/4082/4082019.png",
  },
  {
    route: "baby boomers",
    link: "/baby_boomers",
    icon: "https://cdn-icons-png.flaticon.com/128/3160/3160279.png",
  },
  {
    route: "gen x",
    link: "/gen_x",
    icon: "https://cdn-icons-png.flaticon.com/128/4295/4295301.png",
  },
  {
    route: "millennials",
    link: "/millennials",
    icon: "https://cdn-icons-png.flaticon.com/128/7363/7363508.png",
  },
  {
    route: "gen z",
    link: "/gen_z",
    icon: "https://cdn-icons-png.flaticon.com/128/2990/2990638.png",
  },
  {
    route: "gen alpha",
    link: "/gen_alpha",
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
