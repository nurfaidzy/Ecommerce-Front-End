import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NotifHeader, Header, Footer } from "@/layouts";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white text-black">
      <NotifHeader />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
