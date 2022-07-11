import Layout from '../Layouts/Layout';
import styles from '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
