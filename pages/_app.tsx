import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReduxProvider } from "@/store/index"; // atau langsung ke tsx


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
