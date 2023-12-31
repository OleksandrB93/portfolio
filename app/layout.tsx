import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { VantaProvider } from "@/components/providers/VantaProvider";
import { cn } from "@/lib/utils";
import Loading from "@/components/Loading";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://portfolio-tan-nine-85.vercel.app/_next/static/css/8b74f3e07333c2f9.css"
          as="style"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          async
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.fog.min.js"
          async
        ></script>
      </head>
      <body
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
        className={cn(inter.className)}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <VantaProvider>
            <div className="absolute top-1/2 -translate-y-[250px] left-1/2 -translate-x-[415px]">
              <Sidebar />
              <Loading />
              <main>
                {children}

                <Toaster />
              </main>
            </div>
          </VantaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
