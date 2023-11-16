import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <div className="bg-[url('/hexagon-bg.svg')] h-screen w-screen fixed z-[-1] opacity-[.1]"></div>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
