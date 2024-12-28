import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NotifHeader from "./layout/NotifHeader";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NotifHeader />
      <Component {...pageProps} />
    </div>
  );
}
