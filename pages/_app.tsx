import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import * as mixin from "../styles/mixin";
import color from "../styles/color";
import { ReactQueryDevtools } from "react-query/devtools";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { RecoilRoot } from "recoil";
import React from "react";
config.autoAddCss = false;

const theme = { color, mixin };

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
            <ReactQueryDevtools />
          </RecoilRoot>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
