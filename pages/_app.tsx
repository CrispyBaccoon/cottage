import "../styles/globals.scss";
import { AppProps } from "next/app";
import NavigationBar from "../components/NavigationBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full h-full bg-[#F7F1E3] flex flex-col md:flex-row">
      <div>
        <NavigationBar />
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
