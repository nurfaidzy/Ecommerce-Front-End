import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NotifHeader from "./layout/NotifHeader";
import Header from "./layout/Header";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NotifHeader />
      <Header/>
      <Component {...pageProps} />
    </div>
  );
}
