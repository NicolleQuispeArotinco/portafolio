import '../styles/globals.css'
import { ThemeProvider } from "@chakra-ui/core";
import newTheme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={newTheme}>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
