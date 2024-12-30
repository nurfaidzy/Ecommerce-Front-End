import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NotifHeader from "./layout/NotifHeader";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NotifHeader />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
