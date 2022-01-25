import "../styles/globals.scss";
import { AppProps } from "next/app";
import NavigationBar from "../components/NavigationBar";

function App({ Component, pageProps }: AppProps) {
  const NavigationItems = [
    {
      name: "Main",
      pages: [
        { title: "Home", ref: "/" },
        { title: "About", ref: "/about" },
      ],
    },
    { name: "Pages", pages: [{ title: "Example", ref: "/example" }] },
  ];
  return (
    <div className="w-full h-full bg-[#F7F1E3] flex flex-col md:flex-row">
      <div>
        <NavigationBar Items={NavigationItems} />
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
