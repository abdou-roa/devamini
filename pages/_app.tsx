import { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/Theme";
import '../styles/fonts.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
