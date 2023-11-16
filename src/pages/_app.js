import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/theme";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <CustomCursor />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
