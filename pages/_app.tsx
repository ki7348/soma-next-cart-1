import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import * as mixin from "../styles/mixin";

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
