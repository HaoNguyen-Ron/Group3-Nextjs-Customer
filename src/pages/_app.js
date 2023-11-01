import Layout from '@/components/Layout';
import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material';
import { pink } from '@mui/material/colors';
import Head from 'next/head';
import Script from 'next/script';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EE2D7A'
    },
  }
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head >
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head >

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <ThemeProvider theme={theme}>
        <Layout >
          <Component {...pageProps} />
        </Layout>

      </ThemeProvider>
    </>
  );
}
