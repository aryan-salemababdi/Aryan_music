"use client"
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";


const cache = createCache({
    key: "my-prefix-key",
  });
  

function ThemesProviders({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
        </CacheProvider>
        )
  }
  
  export default ThemesProviders;
  