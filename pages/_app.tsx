import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import * as mixin from "../styles/mixin";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const queryClient = new QueryClient();
const theme = { mixin };

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
