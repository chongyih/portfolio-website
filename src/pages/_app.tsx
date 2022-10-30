import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { Analytics } from "@vercel/analytics";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default MyApp;
