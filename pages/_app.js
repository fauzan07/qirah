import MasterLayout from '../src/components/layouts/master';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <MasterLayout>
      <Component {...pageProps} />
    </MasterLayout>
  )
}

export default MyApp
