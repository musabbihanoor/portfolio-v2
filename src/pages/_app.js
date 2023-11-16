import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        pauseOnFocusLoss={false}
        autoClose={1500}
        theme="light"
        closeOnClick
      />
      <CustomCursor />
      <div className="bg-[url('/hexagon-bg.svg')] h-screen w-screen fixed z-[-1] opacity-[.1]"></div>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
