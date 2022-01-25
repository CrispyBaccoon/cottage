import "../styles/globals.scss";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full h-full bg-[#F7F1E3] flex flex-col md:flex-row">
      <div></div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
